-- Hearthfire Database Schema for Supabase
-- Run this in the Supabase SQL Editor after creating your project.

-- ─── Player Profiles ───
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  role text not null default 'player' check (role in ('player', 'admin')),
  display_name text not null default 'Explorer',
  level integer not null default 1,
  total_xp integer not null default 0,
  created_at timestamptz not null default now()
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'role', 'player'),
    coalesce(new.raw_user_meta_data->>'display_name', 'Explorer')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ─── Daily Check-ins ───
create table checkins (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  type text not null check (type in ('morning', 'evening')),
  check_date date not null default current_date,
  items jsonb not null default '[]',
  total_score integer,
  gaming_unlocked boolean,
  pulse jsonb,
  reflections jsonb,
  day_rating integer,
  xp_earned integer not null default 0,
  created_at timestamptz not null default now(),
  unique (player_id, type, check_date)
);

-- ─── Inventory ───
create table inventory (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  item_key text not null,
  quantity integer not null default 0,
  unique (player_id, item_key)
);

-- ─── Forage History ───
create table forages (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  forage_type text,
  location_name text,
  reward jsonb,
  created_at timestamptz not null default now()
);

-- ─── Quest Assignments ───
create table player_quests (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  quest_key text not null,
  title text,
  domain text,
  domain_name text,
  quest_level integer,
  difficulty integer,
  description text,
  reflection_prompt text,
  status text not null default 'active' check (status in ('active', 'completed', 'abandoned')),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  reflection text,
  reflection_level integer,
  xp_earned integer not null default 10,
  steps_completed jsonb
);

-- ─── Milestones ───
create table milestones (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  milestone_key text not null,
  xp_earned integer not null default 0,
  achieved_at timestamptz not null default now(),
  unique (player_id, milestone_key)
);

-- ─── Crafted Gear ───
create table crafted_gear (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references profiles on delete cascade,
  gear_key text not null,
  crafted_at timestamptz not null default now()
);

-- ─── Row Level Security ───
-- Players can only see/edit their own data. Admins can see all player data.

alter table profiles enable row level security;
alter table checkins enable row level security;
alter table inventory enable row level security;
alter table forages enable row level security;
alter table player_quests enable row level security;
alter table milestones enable row level security;
alter table crafted_gear enable row level security;

-- Profiles: users see own, admins see all
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);
create policy "Admins can view all profiles" on profiles
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Checkins: players see own, admins see all
create policy "Players see own checkins" on checkins
  for all using (auth.uid() = player_id);
create policy "Admins see all checkins" on checkins
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Inventory: players see own, admins see all
create policy "Players manage own inventory" on inventory
  for all using (auth.uid() = player_id);
create policy "Admins see all inventory" on inventory
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Forages: players see own, admins see all
create policy "Players manage own forages" on forages
  for all using (auth.uid() = player_id);
create policy "Admins see all forages" on forages
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Quests: players manage own, admins can read and update (for reflection grading)
create policy "Players manage own quests" on player_quests
  for all using (auth.uid() = player_id);
create policy "Admins see all quests" on player_quests
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );
create policy "Admins can update quests" on player_quests
  for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Milestones: players see own, admins see all
create policy "Players manage own milestones" on milestones
  for all using (auth.uid() = player_id);
create policy "Admins see all milestones" on milestones
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Crafted gear: players manage own, admins see all
create policy "Players manage own gear" on crafted_gear
  for all using (auth.uid() = player_id);
create policy "Admins see all gear" on crafted_gear
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );
