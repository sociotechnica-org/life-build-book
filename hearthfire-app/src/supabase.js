import { createClient } from '@supabase/supabase-js';

// ─── Supabase Configuration ───
// Fill these in from your Supabase project: Settings → API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabaseEnabled = !!(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = supabaseEnabled
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
