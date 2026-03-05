import { useState, useEffect } from 'react';
import { MORNING_ITEMS } from '../constants';
import { calcMorningXP, calcMorningScore, isGamingUnlocked } from '../game-logic';
import { getTodayCheckin, saveCheckin, updateXP, unlockMilestone, getPlayerProfile } from '../storage';

// Rune constants
const RUNE_FIRE = '\u16B2';   // ᚲ Kenaz — torch/flame
const RUNE_FORAGE = '\u16B1'; // ᚱ Raido — journey

export default function CheckinMorning({ onForage }) {
  const [scores, setScores] = useState({});
  const [clarity, setClarity] = useState(0);
  const [threats, setThreats] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const existing = getTodayCheckin('morning');
    if (existing) {
      setSubmitted(existing);
    }
  }, []);

  const setItemScore = (key, score) => {
    setScores(prev => ({ ...prev, [key]: score }));
  };

  const items = MORNING_ITEMS.map(item => ({
    ...item,
    score: scores[item.key] ?? -1,
  }));

  const allScored = MORNING_ITEMS.every(item => scores[item.key] !== undefined);
  const totalScore = calcMorningScore(items.filter(i => i.score >= 0));
  const xpEarned = allScored ? calcMorningXP(items) : 0;
  const gamingUnlocked = isGamingUnlocked(totalScore);

  const handleSubmit = () => {
    const data = {
      items: items.map(i => ({ key: i.key, score: i.score })),
      totalScore,
      gamingUnlocked,
      pulse: { clarity, threats },
      xpEarned,
    };
    const entry = saveCheckin('morning', data);
    updateXP(xpEarned);

    // Check milestones
    const milestone = unlockMilestone('firstMorning', 10);
    if (milestone) {
      updateXP(milestone.xp);
      data.milestoneXP = milestone.xp;
    }

    setSubmitted(entry);
    setShowResult(true);
  };

  const handleForage = () => {
    onForage('standard');
  };

  // Show summary if already submitted today
  if (submitted && !showResult) {
    return (
      <div className="animate-fade-up" style={{ padding: '0 16px' }}>
        <div className="card card-dawn">
          <div className="fire-bar" />
          <div className="card-inner">
            <div className="text-center">
              <div className="rune-hero rune-hero-dawn">{RUNE_FIRE}</div>
              <div className="section-label section-label-amber">Dawn March Complete</div>
              <div className="score-display" style={{ marginTop: 12 }}>
                <div className="score-number">{submitted.totalScore}<span style={{ fontSize: 18, color: 'var(--text-dim)' }}>/8</span></div>
                <div className="score-label">Score</div>
              </div>
              <div className={`gaming-gate ${submitted.gamingUnlocked ? 'unlocked' : 'locked'}`}>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>
                  {submitted.gamingUnlocked ? '\u2713  UNLOCKED' : '\u2717  LOCKED'}
                </div>
                <div style={{ fontSize: 11, marginTop: 2, opacity: 0.8 }}>
                  Gaming Access
                </div>
              </div>
              <div className="xp-badge" style={{ marginTop: 12 }}>
                +{submitted.xpEarned} XP earned
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show result right after submission
  if (showResult && submitted) {
    return (
      <div className="animate-fade-up" style={{ padding: '0 16px' }}>
        <div className="card card-dawn">
          <div className="fire-bar" />
          <div className="card-inner text-center">
            <div className="rune-hero rune-hero-dawn" style={{ fontSize: 48 }}>{RUNE_FIRE}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>
              Dawn March Complete!
            </div>
            <div className="score-display" style={{ marginTop: 16 }}>
              <div className="score-number">{totalScore}<span style={{ fontSize: 18, color: 'var(--text-dim)' }}>/8</span></div>
              <div className="score-label">Score</div>
            </div>
            <div className={`gaming-gate ${gamingUnlocked ? 'unlocked' : 'locked'}`}>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 1, fontFamily: 'var(--font-heading)' }}>
                {gamingUnlocked ? '\u2713  UNLOCKED' : '\u2717  LOCKED'}
              </div>
              <div style={{ fontSize: 12, marginTop: 4, opacity: 0.8 }}>
                {gamingUnlocked ? 'Gaming Access Granted' : 'Threshold is 5/8'}
              </div>
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <div className="xp-badge">+{xpEarned} XP</div>
              {submitted.milestoneXP && (
                <div className="xp-badge" style={{ background: 'rgba(241,196,15,0.12)', borderColor: 'rgba(241,196,15,0.3)', color: '#F1C40F' }}>
                  +{submitted.milestoneXP} XP First Check-in Bonus!
                </div>
              )}
            </div>
            <div className="mt-20">
              <button className="btn-primary" onClick={handleForage}>
                {RUNE_FORAGE} Enter the Wilds — Forage
              </button>
            </div>
            <button
              className="btn-secondary mt-8"
              onClick={() => setShowResult(false)}
            >
              Skip Foraging
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main check-in form
  return (
    <div className="animate-fade-up" style={{ padding: '0 16px' }}>
      <div className="card card-dawn">
        <div className="fire-bar" />
        <div className="card-inner">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="rune-badge rune-badge-dawn">{RUNE_FIRE}</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 1, fontFamily: 'var(--font-heading)' }}>Dawn March</div>
              <div style={{ fontSize: 10, color: 'var(--text-dim)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>Morning Mission</div>
            </div>
          </div>

          {/* Scored Items */}
          <div className="section-label section-label-amber">Base Camp Check</div>
          {MORNING_ITEMS.map(item => (
            <div key={item.key} className="checkin-item">
              <div className="checkin-label">
                <div className="checkin-label-name">{item.label}</div>
                <div className="checkin-label-desc">
                  {scores[item.key] === 2 ? item.fullDesc :
                   scores[item.key] === 1 ? item.partialDesc :
                   scores[item.key] === 0 ? item.missDesc :
                   item.fullDesc}
                </div>
              </div>
              <div className="score-buttons">
                <button
                  className={`score-btn ${scores[item.key] === 2 ? 'selected-full' : ''}`}
                  onClick={() => setItemScore(item.key, 2)}
                  title="Full"
                >
                  {'\u2713'}
                </button>
                <button
                  className={`score-btn ${scores[item.key] === 1 ? 'selected-partial' : ''}`}
                  onClick={() => setItemScore(item.key, 1)}
                  title="Partial"
                >
                  ~
                </button>
                <button
                  className={`score-btn ${scores[item.key] === 0 ? 'selected-miss' : ''}`}
                  onClick={() => setItemScore(item.key, 0)}
                  title="Miss"
                >
                  {'\u2717'}
                </button>
              </div>
            </div>
          ))}

          {/* Live Score */}
          {allScored && (
            <div className="score-display animate-fade-up">
              <div className="score-number">{totalScore}<span style={{ fontSize: 18, color: 'var(--text-dim)' }}>/8</span></div>
              <div className="score-label">Score</div>
              <div className={`gaming-gate mt-8 ${gamingUnlocked ? 'unlocked' : 'locked'}`}>
                {gamingUnlocked ? '\u2713 Unlocked' : '\u2717 Below threshold (5/8)'}
              </div>
            </div>
          )}

          {/* Morning Pulse */}
          <div className="mt-20">
            <div className="section-label section-label-amber">Morning Pulse</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 6 }}>Head clarity</div>
              <div className="day-rating">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    className={`day-rating-ember ${clarity >= n ? 'active' : ''}`}
                    onClick={() => setClarity(n)}
                  >
                    {clarity >= n ? '\u2726' : '\u25CB'}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 6 }}>Anything threatening today's plan?</div>
              <textarea
                className="reflect-textarea"
                placeholder="Nothing specific... or flag what's on your mind"
                value={threats}
                onChange={e => setThreats(e.target.value)}
                style={{ minHeight: 56 }}
              />
            </div>
          </div>

          {/* XP Preview */}
          {allScored && (
            <div className="mt-12 text-center animate-fade-up">
              <div className="xp-badge">+{xpEarned} XP</div>
            </div>
          )}

          {/* Submit */}
          <div className="mt-20">
            <button
              className="btn-primary"
              disabled={!allScored}
              onClick={handleSubmit}
            >
              {allScored ? 'Submit Dawn March' : 'Score all items to submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
