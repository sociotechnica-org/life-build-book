import { useState, useEffect } from 'react';
import { LEVEL_THRESHOLDS, DOMAINS } from '../constants';
import { getLevelInfo } from '../game-logic';
import { getPlayerProfile, getTodayCheckin, getActiveQuests, getForageHistory, getInventory } from '../storage';
import PageBanner from './PageBanner';

const RUNE_FIRE = '\u16B2';   // ᚲ Kenaz
const RUNE_MOON = '\u16D7';   // ᛗ Mannaz
const RUNE_HOME = '\u16DF';   // ᛟ Othala
const RUNE_QUEST = '\u16CF';  // ᛏ Tiwaz

export default function Dashboard({ onNavigate, onForage }) {
  const [profile, setProfile] = useState(getPlayerProfile());
  const [morningDone, setMorningDone] = useState(null);
  const [eveningDone, setEveningDone] = useState(null);

  useEffect(() => {
    setProfile(getPlayerProfile());
    setMorningDone(getTodayCheckin('morning'));
    setEveningDone(getTodayCheckin('evening'));
  }, []);

  const levelInfo = getLevelInfo(profile.totalXP);
  const activeQuests = getActiveQuests();
  const recentForages = getForageHistory().slice(0, 3);

  // Daily progress
  const dailyDone = (morningDone ? 1 : 0) + (eveningDone ? 1 : 0);
  const dailyTotal = 2;

  return (
    <div>
      {/* Banner with compact character strip */}
      <PageBanner image="camp.png" height="30vh">
        <div className="page-header-brand">HEARTHFIRE</div>
        <div className="page-header-title">Base Camp</div>
        <div className="character-strip">
          <div className="rune-badge rune-badge-dawn character-strip-badge">
            {RUNE_HOME}
          </div>
          <div className="character-strip-info">
            <span className="character-strip-title">{levelInfo.title}</span>
            <span className="character-strip-level">Lv {levelInfo.level}</span>
          </div>
          {levelInfo.xpNeeded && (
            <div className="character-strip-xp">
              <div className="progress-bar character-strip-bar">
                <div className="progress-fill" style={{ width: `${Math.round(levelInfo.progress * 100)}%` }} />
              </div>
              <span className="character-strip-xp-text">
                {levelInfo.xpIntoLevel}/{levelInfo.xpNeeded}
              </span>
            </div>
          )}
        </div>
      </PageBanner>

      {/* Daily Check-ins */}
      <div style={{ padding: '0 16px', marginTop: 12 }}>
          {/* Daily Progress Indicator */}
          <div className="daily-progress">
            <div className="daily-progress-header">
              <span className="daily-progress-label">Today's March</span>
              <span className="daily-progress-count">{dailyDone}/{dailyTotal}</span>
            </div>
            <div className="daily-progress-track">
              {[0, 1].map(i => (
                <div
                  key={i}
                  className={`daily-progress-segment ${i < dailyDone ? 'daily-progress-segment-done' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Morning Status */}
          <button
            onClick={() => onNavigate('checkin-morning')}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', marginBottom: 8,
              background: 'var(--surface)', borderRadius: 4,
              border: `1px solid ${morningDone ? 'rgba(76,175,80,0.3)' : 'rgba(212,148,58,0.3)'}`,
              cursor: 'pointer', textAlign: 'left',
              fontFamily: "'Cinzel', 'Georgia', serif",
              color: morningDone ? 'var(--text-dim)' : 'var(--text)',
            }}
          >
            <span style={{ fontSize: 22, color: morningDone ? 'var(--success)' : 'var(--amber)', fontFamily: 'var(--font-heading)' }}>
              {morningDone ? '\u2713' : RUNE_FIRE}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-heading)', color: morningDone ? 'var(--text-dim)' : 'var(--text)' }}>Dawn March</div>
              <div className="text-xs text-dim">
                {morningDone
                  ? `Score: ${morningDone.totalScore}/8 \u00B7 ${morningDone.gamingUnlocked ? '\u2713 Gaming unlocked' : '\u2717 Gaming locked'}`
                  : 'Tap to start morning check-in'}
              </div>
            </div>
            {morningDone && <span className="xp-badge">+{morningDone.xpEarned}</span>}
          </button>

          {/* Evening Status */}
          <button
            onClick={() => onNavigate('checkin-evening')}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', marginBottom: 8,
              background: 'var(--surface)', borderRadius: 4,
              border: `1px solid ${eveningDone ? 'rgba(106,138,170,0.3)' : 'rgba(106,138,170,0.15)'}`,
              cursor: 'pointer', textAlign: 'left',
              fontFamily: "'Cinzel', 'Georgia', serif",
              color: eveningDone ? 'var(--text-dim)' : 'var(--text)',
            }}
          >
            <span style={{ fontSize: 22, color: eveningDone ? 'var(--success)' : 'var(--night-glow)', fontFamily: 'var(--font-heading)' }}>
              {eveningDone ? '\u2713' : RUNE_MOON}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-heading)', color: eveningDone ? 'var(--text-dim)' : 'var(--text)' }}>Night Watch</div>
              <div className="text-xs text-dim">
                {eveningDone
                  ? `Rating: ${'\u2726'.repeat(eveningDone.dayRating || 0)}`
                  : 'Tap to start evening check-in'}
              </div>
            </div>
            {eveningDone && <span className="xp-badge">+{eveningDone.xpEarned}</span>}
          </button>
        </div>

        {/* Active Quest — elevated standalone card */}
        {activeQuests.length > 0 && (() => {
          const quest = activeQuests[0];
          const domain = DOMAINS.find(d => d.key === quest.domain);
          const domainColor = domain?.color || 'var(--amber)';
          const domainIcon = domain?.icon || RUNE_QUEST;
          const domainName = domain?.name || quest.domain;
          return (
            <div style={{ padding: '0 16px', marginTop: 16 }}>
              <button
                onClick={() => onNavigate('quest-active')}
                className="card quest-card-active"
                style={{
                  margin: 0,
                  borderLeft: `3px solid ${domainColor}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  fontFamily: "'Cinzel', 'Georgia', serif",
                  color: 'var(--text)',
                }}
              >
                <div className="card-inner" style={{ padding: '16px 16px 16px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="rune-badge" style={{
                      width: 40, height: 40, fontSize: 20,
                      background: `${domainColor}15`,
                      border: `2px solid ${domainColor}60`,
                      color: domainColor,
                      boxShadow: `0 0 12px ${domainColor}20`,
                    }}>
                      {domainIcon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="quest-card-active-label">Active Quest</div>
                      <div className="quest-card-active-title">{quest.title}</div>
                      <div className="quest-card-active-domain" style={{ color: domainColor }}>
                        {domainName}
                      </div>
                    </div>
                    <span className="quest-card-active-cta" style={{ color: domainColor }}>
                      Continue &rarr;
                    </span>
                  </div>
                </div>
              </button>
            </div>
          );
        })()}

        {/* Recent Forages */}
        {recentForages.length > 0 && (
          <div style={{ padding: '0 16px', marginTop: 16 }}>
            <div className="section-label">Recent Forages</div>
            {recentForages.map((f, i) => (
              <div key={f.id || i} style={{
                padding: '8px 12px', marginBottom: 4,
                background: 'var(--surface-light)', borderRadius: 4,
                fontSize: 12, color: 'var(--text-dim)',
                border: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--warm-gray)' }}>
                  {f.locationName || 'Unknown'} —{' '}
                </span>
                <span style={{ color: 'var(--text)' }}>
                  {f.reward?.type === 'provision'
                    ? `${f.reward.item?.name} (${f.reward.item?.value})`
                    : f.reward?.material
                      ? `${f.reward.material} x${f.reward.units}`
                      : 'Unknown'
                  }
                </span>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
