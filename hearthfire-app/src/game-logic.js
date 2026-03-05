// Hearthfire Game Logic — XP, Levels, Momentum, Foraging rolls

import { LEVEL_THRESHOLDS, RARITY, LEVEL_MATS, PROVISIONS } from './constants';

// ─── XP Calculation ───

export function calcMorningXP(items) {
  // items: [{key, score}] where score is 2 (full), 1 (partial), or 0 (miss)
  let xp = 10; // base for completing check-in
  for (const item of items) {
    if (item.score === 2) xp += 2;
    else if (item.score === 1) xp += 1;
  }
  return xp;
}

export function calcMorningScore(items) {
  return items.reduce((sum, item) => sum + item.score, 0);
}

export function isGamingUnlocked(totalScore) {
  return totalScore >= 5;
}

export function calcEveningXP(data) {
  // data: { items, dayRating, reflections: {whatWorked, obstacles, tomorrow} }
  let xp = 10; // base for completing check-in
  const hasReflections = data.reflections &&
    data.reflections.whatWorked?.trim() &&
    data.reflections.obstacles?.trim();
  if (hasReflections) xp += 5;
  if (data.dayRating > 0) xp += 2;
  return xp;
}

// ─── Level & XP ───

export function getLevelInfo(totalXP) {
  let currentLevel = 1;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_THRESHOLDS[i].cumulative) {
      currentLevel = LEVEL_THRESHOLDS[i].level;
      break;
    }
  }
  const threshold = LEVEL_THRESHOLDS[currentLevel - 1];
  const nextThreshold = LEVEL_THRESHOLDS[currentLevel] || null;
  const xpIntoLevel = totalXP - threshold.cumulative;
  const xpNeeded = threshold.xpToNext;
  const progress = xpNeeded ? Math.min(xpIntoLevel / xpNeeded, 1) : 1;

  return {
    level: currentLevel,
    title: threshold.title,
    totalXP,
    xpIntoLevel,
    xpNeeded,
    progress,
    nextLevel: nextThreshold ? nextThreshold.level : null,
    nextTitle: nextThreshold ? nextThreshold.title : null,
  };
}

// ─── Momentum ───

export function calcMomentum(recentDays) {
  // recentDays: array of last 7 days, each { morning: bool, evening: bool, quest: bool }
  // Points per day: morning=3, evening=2, quest=2 (max 7)
  // Weighted: most recent days count more
  if (!recentDays || recentDays.length === 0) return 0;

  const weights = [1, 1.2, 1.5, 2, 2.5, 3, 3.5]; // oldest to newest
  let totalWeighted = 0;
  let totalWeight = 0;

  for (let i = 0; i < recentDays.length && i < 7; i++) {
    const day = recentDays[i];
    const pts = (day.morning ? 3 : 0) + (day.evening ? 2 : 0) + (day.quest ? 2 : 0);
    const w = weights[Math.min(i, weights.length - 1)];
    totalWeighted += (pts / 7) * w;
    totalWeight += w;
  }

  return Math.round((totalWeighted / totalWeight) * 100);
}

export function momentumPayout(score) {
  if (score >= 80) return 40 + Math.round((score - 80) * 0.5);
  if (score >= 60) return 25 + Math.round((score - 60) * 0.7);
  if (score >= 40) return 15 + Math.round((score - 40) * 0.5);
  if (score >= 20) return 5 + Math.round((score - 20) * 0.45);
  return Math.round(score * 0.2);
}

// ─── Quest XP ───

export function calcQuestXP(difficulty, reflectionLevel) {
  // difficulty: 1, 2, or 3 (stars)
  // reflectionLevel: 1, 2, or 3
  const base = { 1: 50, 2: 75, 3: 100 }[difficulty] || 50;
  const startBonus = 10;
  let reflectionBonus = 0;
  if (reflectionLevel >= 2) reflectionBonus += 15;
  if (reflectionLevel >= 3) reflectionBonus += 15; // total +30 for L3
  return base + startBonus + reflectionBonus;
}

// Base XP awarded immediately on quest completion (includes start bonus)
export function calcQuestBaseXP(difficulty) {
  return ({ 1: 50, 2: 75, 3: 100 }[difficulty] || 50) + 10;
}

// Reflection bonus XP awarded after parent review
export function calcReflectionBonusXP(reflectionLevel) {
  let bonus = 0;
  if (reflectionLevel >= 2) bonus += 15;
  if (reflectionLevel >= 3) bonus += 15;
  return bonus;
}

// ─── Foraging ───

export function rollRarity() {
  const r = Math.random();
  let cumulative = 0;
  for (const [key, tier] of Object.entries(RARITY)) {
    cumulative += tier.chance;
    if (r <= cumulative) return key;
  }
  return "common";
}

export function rollReward(level, isBonus) {
  // Bonus forages (quest completion) yield materials only — no provisions
  if (!isBonus && Math.random() < 0.30) {
    const p = PROVISIONS[Math.floor(Math.random() * PROVISIONS.length)];
    return { type: "provision", item: p, sortVal: p.sortVal };
  }
  const rarity = rollRarity();
  const mats = LEVEL_MATS[Math.min(level, 4)];
  const mat = mats[Math.floor(Math.random() * mats.length)];
  return {
    type: rarity === "wildcard" ? "wildcard" : "material",
    material: mat,
    rarity,
    units: RARITY[rarity].units,
    sortVal: RARITY[rarity].sortVal,
  };
}

export function shuffleArray(arr) {
  const b = arr.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
