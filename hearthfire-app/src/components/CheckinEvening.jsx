import { useState, useEffect } from 'react';
import { EVENING_ITEMS } from '../constants';
import { calcEveningXP } from '../game-logic';
import { getTodayCheckin, saveCheckin, updateXP, unlockMilestone } from '../storage';

// Rune constants
const RUNE_MOON = '\u16D7';   // ᛗ Mannaz — moon/self
const RUNE_FORAGE = '\u16B1'; // ᚱ Raido — journey

export default function CheckinEvening({ onForage }) {
  const [selections, setSelections] = useState({});
  const [dayRating, setDayRating] = useState(0);
  const [reflections, setReflections] = useState({ whatWorked: '', obstacles: '', tomorrow: '' });
  const [submitted, setSubmitted] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const existing = getTodayCheckin('evening');
    if (existing) setSubmitted(existing);
  }, []);

  const setSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const setReflection = (key, value) => {
    setReflections(prev => ({ ...prev, [key]: value }));
  };

  const allItemsSelected = EVENING_ITEMS.every(item => selections[item.key] !== undefined);
  const hasReflections = reflections.whatWorked.trim() && reflections.obstacles.trim();
  const canSubmit = allItemsSelected && dayRating > 0;

  const xpEarned = calcEveningXP({
    items: selections,
    dayRating,
    reflections,
  });

  const handleSubmit = () => {
    const data = {
      items: Object.entries(selections).map(([key, value]) => ({ key, value })),
      dayRating,
      reflections,
      xpEarned,
    };
    const entry = saveCheckin('evening', data);
    updateXP(xpEarned);

    const milestone = unlockMilestone('firstEvening', 10);
    if (milestone) {
      updateXP(milestone.xp);
      data.milestoneXP = milestone.xp;
    }

    setSubmitted(entry);
    setShowResult(true);
  };

  // Already submitted summary
  if (submitted && !showResult) {
    return (
      <div className="animate-fade-up" style={{ padding: '0 16px' }}>
        <div className="card card-night">
          <div className="moon-bar" />
          <div className="card-inner text-center">
            <div className="rune-hero rune-hero-night">{RUNE_MOON}</div>
            <div className="section-label section-label-night">Night Watch Complete</div>
            <div className="xp-badge mt-12">+{submitted.xpEarned} XP earned</div>
            {submitted.dayRating > 0 && (
              <div className="mt-8 text-dim text-sm">
                Day rating: {'\u2726'.repeat(submitted.dayRating)}{'\u25CB'.repeat(5 - submitted.dayRating)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Post-submit result
  if (showResult && submitted) {
    return (
      <div className="animate-fade-up" style={{ padding: '0 16px' }}>
        <div className="card card-night">
          <div className="moon-bar" />
          <div className="card-inner text-center">
            <div className="rune-hero rune-hero-night" style={{ fontSize: 48 }}>{RUNE_MOON}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--night-glow)', fontFamily: 'var(--font-heading)' }}>
              Night Watch Complete!
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <div className="xp-badge">+{xpEarned} XP</div>
              {submitted.milestoneXP && (
                <div className="xp-badge" style={{ background: 'rgba(241,196,15,0.12)', borderColor: 'rgba(241,196,15,0.3)', color: '#F1C40F' }}>
                  +{submitted.milestoneXP} XP First Evening Bonus!
                </div>
              )}
            </div>
            <div className="mt-20">
              <button className="btn-night" style={{ color: '#fff', width: '100%', padding: 14, fontSize: 16, fontWeight: 700, borderRadius: 6, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)' }} onClick={() => onForage('standard')}>
                {RUNE_FORAGE} Enter the Wilds — Forage
              </button>
            </div>
            <button className="btn-secondary mt-8" onClick={() => setShowResult(false)}>
              Skip Foraging
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main evening form
  return (
    <div className="animate-fade-up" style={{ padding: '0 16px' }}>
      <div className="card card-night">
        <div className="moon-bar" />
        <div className="card-inner">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="rune-badge rune-badge-night">{RUNE_MOON}</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 1, fontFamily: 'var(--font-heading)' }}>Night Watch</div>
              <div style={{ fontSize: 10, color: 'var(--text-dim)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>Evening Mission</div>
            </div>
          </div>

          {/* Tracking Items */}
          <div className="section-label section-label-night">Evening Status</div>
          {EVENING_ITEMS.map(item => (
            <div key={item.key} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, fontFamily: 'var(--font-heading)' }}>{item.label}</div>
              <div className="option-pills">
                {item.options.map(opt => (
                  <button
                    key={opt}
                    className={`option-pill ${selections[item.key] === opt ? 'selected' : ''}`}
                    onClick={() => setSelection(item.key, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Day Rating */}
          <div className="mt-20">
            <div className="section-label section-label-night">Day Rating</div>
            <div className="day-rating">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  className={`day-rating-ember ${dayRating >= n ? 'active' : ''}`}
                  onClick={() => setDayRating(n)}
                  style={dayRating >= n ? { borderColor: 'var(--night-glow)', background: 'rgba(106,138,170,0.15)' } : {}}
                >
                  {dayRating >= n ? '\u2726' : '\u25CB'}
                </button>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-20">
            <div className="section-label section-label-night">Reflection</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>What worked today?</div>
              <textarea
                className="reflect-textarea"
                placeholder="What went well, what helped..."
                value={reflections.whatWorked}
                onChange={e => setReflection('whatWorked', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>What got in the way?</div>
              <textarea
                className="reflect-textarea"
                placeholder="Obstacles, distractions, struggles..."
                value={reflections.obstacles}
                onChange={e => setReflection('obstacles', e.target.value)}
              />
            </div>
            <div>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>Anything to flag for tomorrow?</div>
              <textarea
                className="reflect-textarea"
                placeholder="Tests, appointments, plans..."
                value={reflections.tomorrow}
                onChange={e => setReflection('tomorrow', e.target.value)}
                style={{ minHeight: 56 }}
              />
            </div>
          </div>

          {/* XP Preview */}
          {canSubmit && (
            <div className="mt-12 text-center animate-fade-up">
              <div className="xp-badge">+{xpEarned} XP</div>
              {!hasReflections && (
                <div className="text-dim text-xs mt-8">+5 more XP if you write reflections</div>
              )}
            </div>
          )}

          {/* Submit */}
          <div className="mt-20">
            <button
              className="btn-night"
              style={{ color: '#fff', width: '100%', padding: 14, fontSize: 16, fontWeight: 700, borderRadius: 6, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', opacity: canSubmit ? 1 : 0.4 }}
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              {canSubmit ? 'Submit Night Watch' : 'Complete items & rate your day'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
