// Hearthfire Storage Abstraction
// Dual backend: Supabase when configured, localStorage as fallback.
// Components should ONLY use these functions — never touch storage directly.

import { supabase, supabaseEnabled } from './supabase';
import { calcReflectionBonusXP } from './game-logic';

// ─── Auth state (set by App after login) ───
let _userId = null;
let _userRole = null;

export function setAuthUser(id, role) {
  _userId = id;
  _userRole = role;
}

export function getAuthUser() {
  return { id: _userId, role: _userRole };
}

export function isAdmin() {
  return _userRole === 'admin';
}

// ─── localStorage helpers (fallback) ───

const KEYS = {
  profile: 'hf-profile',
  checkins: 'hf-checkins',
  inventory: 'hf-inventory',
  forages: 'hf-forages',
  quests: 'hf-quests',
  milestones: 'hf-milestones',
  crafted: 'hf-crafted',
};

function getJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── Player Profile ───

const DEFAULT_PROFILE = {
  displayName: "Explorer",
  level: 1,
  totalXP: 0,
  createdAt: new Date().toISOString(),
};

export function getPlayerProfile() {
  return getJSON(KEYS.profile, { ...DEFAULT_PROFILE, createdAt: new Date().toISOString() });
}

export async function getPlayerProfileAsync(playerId) {
  if (!supabaseEnabled) return getPlayerProfile();
  const pid = playerId || _userId;
  const { data } = await supabase.from('profiles').select('*').eq('id', pid).single();
  if (!data) return { ...DEFAULT_PROFILE };
  return {
    id: data.id,
    displayName: data.display_name,
    level: data.level,
    totalXP: data.total_xp,
    role: data.role,
    createdAt: data.created_at,
  };
}

export function savePlayerProfile(profile) {
  setJSON(KEYS.profile, profile);
  if (supabaseEnabled && _userId) {
    supabase.from('profiles').update({
      display_name: profile.displayName,
      level: profile.level,
      total_xp: profile.totalXP,
    }).eq('id', _userId).then(() => {});
  }
}

export function updateXP(amount) {
  const profile = getPlayerProfile();
  profile.totalXP += amount;
  savePlayerProfile(profile);
  return profile;
}

export function updateLevel(level) {
  const profile = getPlayerProfile();
  profile.level = level;
  savePlayerProfile(profile);
  return profile;
}

// ─── Check-ins ───

export function getCheckins() {
  return getJSON(KEYS.checkins, []);
}

export async function getCheckinsAsync(playerId) {
  if (!supabaseEnabled) return getCheckins();
  const pid = playerId || _userId;
  const { data } = await supabase
    .from('checkins')
    .select('*')
    .eq('player_id', pid)
    .order('check_date', { ascending: false })
    .limit(60);
  return (data || []).map(mapCheckinFromDB);
}

export function getTodayCheckin(type) {
  const today = new Date().toISOString().split('T')[0];
  const all = getCheckins();
  return all.find(c => c.type === type && c.date === today) || null;
}

export function saveCheckin(type, data) {
  const all = getCheckins();
  const today = new Date().toISOString().split('T')[0];
  const entry = {
    id: crypto.randomUUID(),
    type,
    date: today,
    ...data,
    createdAt: new Date().toISOString(),
  };
  const idx = all.findIndex(c => c.type === type && c.date === today);
  if (idx >= 0) all[idx] = entry;
  else all.unshift(entry);
  setJSON(KEYS.checkins, all);

  if (supabaseEnabled && _userId) {
    supabase.from('checkins').upsert({
      id: entry.id,
      player_id: _userId,
      type,
      check_date: today,
      items: entry.items,
      total_score: entry.totalScore,
      gaming_unlocked: entry.gamingUnlocked,
      pulse: entry.pulse,
      reflections: entry.reflections,
      day_rating: entry.dayRating,
      xp_earned: entry.xpEarned,
    }, { onConflict: 'player_id,type,check_date' }).then(() => {});
  }

  return entry;
}

export function getRecentCheckins(days = 7) {
  const all = getCheckins();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split('T')[0];
  return all.filter(c => c.date >= cutoffStr);
}

// ─── Inventory ───

export function getInventory() {
  return getJSON(KEYS.inventory, {});
}

export async function getInventoryAsync(playerId) {
  if (!supabaseEnabled) return getInventory();
  const pid = playerId || _userId;
  const { data } = await supabase.from('inventory').select('*').eq('player_id', pid);
  const inv = {};
  (data || []).forEach(row => { inv[row.item_key] = row.quantity; });
  return inv;
}

export function updateInventory(itemKey, delta) {
  const inv = getInventory();
  inv[itemKey] = (inv[itemKey] || 0) + delta;
  setJSON(KEYS.inventory, inv);

  if (supabaseEnabled && _userId) {
    supabase.from('inventory').upsert({
      player_id: _userId,
      item_key: itemKey,
      quantity: inv[itemKey],
    }, { onConflict: 'player_id,item_key' }).then(() => {});
  }

  return inv;
}

export function setInventory(inv) {
  setJSON(KEYS.inventory, inv);
}

// ─── Forages ───

export function getForageHistory() {
  return getJSON(KEYS.forages, []);
}

export async function getForageHistoryAsync(playerId) {
  if (!supabaseEnabled) return getForageHistory();
  const pid = playerId || _userId;
  const { data } = await supabase
    .from('forages')
    .select('*')
    .eq('player_id', pid)
    .order('created_at', { ascending: false })
    .limit(50);
  return (data || []).map(mapForageFromDB);
}

export function saveForage(result) {
  const history = getForageHistory();
  const entry = {
    id: crypto.randomUUID(),
    ...result,
    createdAt: new Date().toISOString(),
  };
  history.unshift(entry);
  if (history.length > 50) history.length = 50;
  setJSON(KEYS.forages, history);

  if (supabaseEnabled && _userId) {
    supabase.from('forages').insert({
      id: entry.id,
      player_id: _userId,
      forage_type: entry.forageType,
      location_name: entry.locationName,
      reward: entry.reward,
    }).then(() => {});
  }

  return entry;
}

// ─── Quests ───

export function getQuests() {
  return getJSON(KEYS.quests, []);
}

export async function getQuestsAsync(playerId) {
  if (!supabaseEnabled) return getQuests();
  const pid = playerId || _userId;
  const { data } = await supabase
    .from('player_quests')
    .select('*')
    .eq('player_id', pid)
    .order('started_at', { ascending: false });
  return (data || []).map(mapQuestFromDB);
}

export function getActiveQuests() {
  return getQuests().filter(q => q.status === 'active');
}

export function getCompletedQuests() {
  return getQuests().filter(q => q.status === 'completed');
}

export function saveQuest(quest) {
  const all = getQuests();
  const entry = {
    id: crypto.randomUUID(),
    status: 'active',
    startedAt: new Date().toISOString(),
    ...quest,
  };
  all.unshift(entry);
  setJSON(KEYS.quests, all);

  if (supabaseEnabled && _userId) {
    supabase.from('player_quests').insert({
      id: entry.id,
      player_id: _userId,
      quest_key: entry.questKey,
      title: entry.title,
      domain: entry.domain,
      domain_name: entry.domainName,
      quest_level: entry.questLevel,
      difficulty: entry.difficulty,
      description: entry.description,
      reflection_prompt: entry.reflectionPrompt,
      status: 'active',
    }).then(() => {});
  }

  return entry;
}

export function completeQuest(questId, reflection, selfAssessedLevel, baseXP) {
  const all = getQuests();
  const idx = all.findIndex(q => q.id === questId);
  if (idx >= 0) {
    all[idx].status = 'completed';
    all[idx].completedAt = new Date().toISOString();
    all[idx].reflection = reflection;
    all[idx].selfAssessedLevel = selfAssessedLevel;
    all[idx].reflectionLevel = selfAssessedLevel; // backward compat
    all[idx].reflectionReview = 'pending';
    all[idx].awardedReflectionLevel = null;
    all[idx].baseXP = baseXP;
    all[idx].reflectionBonusXP = 0;
    all[idx].xpEarned = baseXP;
  }
  setJSON(KEYS.quests, all);

  if (supabaseEnabled) {
    supabase.from('player_quests').update({
      status: 'completed',
      completed_at: new Date().toISOString(),
      reflection,
      reflection_level: selfAssessedLevel,
      self_assessed_level: selfAssessedLevel,
      reflection_review: 'pending',
      awarded_reflection_level: null,
      base_xp: baseXP,
      reflection_bonus_xp: 0,
      xp_earned: baseXP,
    }).eq('id', questId).then(() => {});
  }

  return all[idx];
}

export function abandonQuest(questId) {
  const all = getQuests();
  const idx = all.findIndex(q => q.id === questId);
  if (idx >= 0) all[idx].status = 'abandoned';
  setJSON(KEYS.quests, all);

  if (supabaseEnabled) {
    supabase.from('player_quests').update({ status: 'abandoned' }).eq('id', questId).then(() => {});
  }
}

// Admin: update reflection level on a quest (legacy)
export async function adminUpdateReflectionLevel(questId, newLevel, newXP) {
  if (!supabaseEnabled) {
    const all = getQuests();
    const idx = all.findIndex(q => q.id === questId);
    if (idx >= 0) {
      all[idx].reflectionLevel = newLevel;
      all[idx].xpEarned = newXP;
      setJSON(KEYS.quests, all);
    }
    return;
  }
  await supabase.from('player_quests').update({
    reflection_level: newLevel,
    xp_earned: newXP,
  }).eq('id', questId);
}

// Get quests pending parent reflection review
export function getPendingReflections() {
  return getQuests().filter(q => q.status === 'completed' && q.reflectionReview === 'pending');
}

// Parent reviews a reflection and awards bonus XP
export function reviewReflection(questId, awardedLevel) {
  const all = getQuests();
  const idx = all.findIndex(q => q.id === questId);
  if (idx < 0) return null;

  const quest = all[idx];
  const bonusXP = calcReflectionBonusXP(awardedLevel);
  quest.reflectionReview = 'reviewed';
  quest.awardedReflectionLevel = awardedLevel;
  quest.reflectionBonusXP = bonusXP;
  quest.xpEarned = (quest.baseXP || 0) + bonusXP;

  setJSON(KEYS.quests, all);

  // Award the bonus XP to the player profile
  if (bonusXP > 0) updateXP(bonusXP);

  if (supabaseEnabled) {
    supabase.from('player_quests').update({
      reflection_review: 'reviewed',
      awarded_reflection_level: awardedLevel,
      reflection_bonus_xp: bonusXP,
      xp_earned: quest.xpEarned,
    }).eq('id', questId).then(() => {});
  }

  return quest;
}

// ─── Milestones ───

export function getMilestones() {
  return getJSON(KEYS.milestones, {});
}

export async function getMilestonesAsync(playerId) {
  if (!supabaseEnabled) return getMilestones();
  const pid = playerId || _userId;
  const { data } = await supabase.from('milestones').select('*').eq('player_id', pid);
  const map = {};
  (data || []).forEach(row => {
    map[row.milestone_key] = { achievedAt: row.achieved_at, xp: row.xp_earned };
  });
  return map;
}

export function unlockMilestone(key, xp) {
  const milestones = getMilestones();
  if (milestones[key]) return null;
  milestones[key] = { achievedAt: new Date().toISOString(), xp };
  setJSON(KEYS.milestones, milestones);

  if (supabaseEnabled && _userId) {
    supabase.from('milestones').insert({
      player_id: _userId,
      milestone_key: key,
      xp_earned: xp,
    }).then(() => {});
  }

  return { key, xp };
}

export function isMilestoneUnlocked(key) {
  return !!getMilestones()[key];
}

// ─── Crafted Gear ───

export function getCraftedGear() {
  return getJSON(KEYS.crafted, []);
}

export async function getCraftedGearAsync(playerId) {
  if (!supabaseEnabled) return getCraftedGear();
  const pid = playerId || _userId;
  const { data } = await supabase.from('crafted_gear').select('*').eq('player_id', pid);
  return (data || []).map(row => ({ gearKey: row.gear_key, craftedAt: row.crafted_at }));
}

export function craftGear(gearKey, materialKey, cost) {
  const inv = getInventory();
  if ((inv[materialKey] || 0) < cost) return null;
  inv[materialKey] -= cost;
  setJSON(KEYS.inventory, inv);

  const crafted = getCraftedGear();
  const entry = { gearKey, craftedAt: new Date().toISOString() };
  crafted.push(entry);
  setJSON(KEYS.crafted, crafted);

  if (supabaseEnabled && _userId) {
    supabase.from('inventory').upsert({
      player_id: _userId,
      item_key: materialKey,
      quantity: inv[materialKey],
    }, { onConflict: 'player_id,item_key' }).then(() => {});
    supabase.from('crafted_gear').insert({
      player_id: _userId,
      gear_key: gearKey,
    }).then(() => {});
  }

  return entry;
}

// ─── Utility: Reset ───

export function resetAllData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}

// ─── DB → App mappers ───

function mapCheckinFromDB(row) {
  return {
    id: row.id,
    type: row.type,
    date: row.check_date,
    items: row.items,
    totalScore: row.total_score,
    gamingUnlocked: row.gaming_unlocked,
    pulse: row.pulse,
    reflections: row.reflections,
    dayRating: row.day_rating,
    xpEarned: row.xp_earned,
    createdAt: row.created_at,
  };
}

function mapForageFromDB(row) {
  return {
    id: row.id,
    forageType: row.forage_type,
    locationName: row.location_name,
    reward: row.reward,
    createdAt: row.created_at,
  };
}

function mapQuestFromDB(row) {
  return {
    id: row.id,
    questKey: row.quest_key,
    title: row.title,
    domain: row.domain,
    domainName: row.domain_name,
    questLevel: row.quest_level,
    difficulty: row.difficulty,
    description: row.description,
    reflectionPrompt: row.reflection_prompt,
    status: row.status,
    startedAt: row.started_at,
    completedAt: row.completed_at,
    reflection: row.reflection,
    reflectionLevel: row.reflection_level,
    selfAssessedLevel: row.self_assessed_level,
    reflectionReview: row.reflection_review,
    awardedReflectionLevel: row.awarded_reflection_level,
    baseXP: row.base_xp,
    reflectionBonusXP: row.reflection_bonus_xp,
    xpEarned: row.xp_earned,
    stepsCompleted: row.steps_completed,
  };
}
