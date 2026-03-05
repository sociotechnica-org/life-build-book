import { useState, useEffect } from 'react';
import { LEVEL_THRESHOLDS, LEVEL_PRIVILEGES } from '../constants';
import { getLevelInfo } from '../game-logic';
import { getPlayerProfile, getTodayCheckin, getRecentCheckins } from '../storage';
import PageBanner from './PageBanner';

const RUNE_PROFILE = '\u16DF'; // ᛟ Othala

export default function Profile() {
  const [profile, setProfile] = useState(getPlayerProfile());
  const [morningCheckin, setMorningCheckin] = useState(null);
  const [weeklyCheckins, setWeeklyCheckins] = useState(0);

  useEffect(() => {
    setProfile(getPlayerProfile());
    setMorningCheckin(getTodayCheckin('morning'));

    // Count morning check-ins in last 7 days for weekly activation
    const recent = getRecentCheckins(7);
    const morningCount = recent.filter(c => c.type === 'morning').length;
    setWeeklyCheckins(morningCount);
  }, []);

  const levelInfo = getLevelInfo(profile.totalXP);
  const currentLevel = levelInfo.level;
  const privileges = LEVEL_PRIVILEGES[currentLevel];
  const nextLevel = currentLevel < 7 ? currentLevel + 1 : null;
  const nextPrivileges = nextLevel ? LEVEL_PRIVILEGES[nextLevel] : null;

  const gamingUnlocked = morningCheckin?.gamingUnlocked ?? false;
  const gamingCheckedIn = !!morningCheckin;

  return (
    <div>
      <PageBanner image="camp.png" height="30vh">
        <div className="page-header-brand">HEARTHFIRE</div>
        <div className="page-header-title">Profile</div>
      </PageBanner>

      {/* Character Card */}
      <div style={{ padding: '0 16px', marginTop: 12 }}>
        <div className="card">
          <div className="fire-bar" />
          <div className="card-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="rune-badge rune-badge-dawn" style={{ width: 56, height: 56, fontSize: 28 }}>
                {RUNE_PROFILE}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Level {levelInfo.level}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  {levelInfo.title}
                </div>
                <div className="text-xs text-dim">{levelInfo.totalXP} XP total</div>
              </div>
            </div>

            {levelInfo.xpNeeded && (
              <div style={{ marginTop: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>
                  <span>Level {levelInfo.level}</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{levelInfo.xpIntoLevel} / {levelInfo.xpNeeded}</span>
                  <span>Level {levelInfo.nextLevel}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${Math.round(levelInfo.progress * 100)}%` }} />
                </div>
              </div>
            )}

            {!levelInfo.xpNeeded && (
              <div style={{ marginTop: 12, textAlign: 'center', padding: 10, background: 'rgba(212,148,58,0.08)', borderRadius: 6, fontSize: 13, color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>
                Maximum Level Achieved
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Today's Status */}
      <div style={{ padding: '0 16px', marginTop: 20 }}>
        <div className="section-label section-label-amber">Today's Status</div>
        <div style={{
          padding: 14, borderRadius: 8,
          background: 'var(--surface)',
          border: '1px solid var(--border-warm)',
        }}>
          {/* Gaming Access */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px', borderRadius: 6,
            background: gamingCheckedIn
              ? (gamingUnlocked ? 'rgba(76,175,80,0.08)' : 'rgba(231,76,60,0.08)')
              : 'rgba(139,134,128,0.08)',
            border: `1px solid ${gamingCheckedIn
              ? (gamingUnlocked ? 'rgba(76,175,80,0.25)' : 'rgba(231,76,60,0.25)')
              : 'rgba(139,134,128,0.15)'}`,
          }}>
            <span style={{
              fontSize: 20, fontFamily: 'var(--font-heading)',
              color: gamingCheckedIn
                ? (gamingUnlocked ? 'var(--success)' : '#E74C3C')
                : 'var(--text-dim)',
            }}>
              {gamingCheckedIn ? (gamingUnlocked ? '\u2713' : '\u2717') : '\u2014'}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                Gaming Access
              </div>
              <div className="text-xs text-dim">
                {gamingCheckedIn
                  ? (gamingUnlocked
                    ? `Unlocked \u2014 scored ${morningCheckin.totalScore}/8`
                    : `Locked \u2014 scored ${morningCheckin.totalScore}/8 (need 5)`)
                  : 'Complete Dawn March to activate'}
              </div>
            </div>
          </div>

          {/* Weekly Check-in Activation */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px', borderRadius: 6, marginTop: 8,
            background: 'rgba(212,148,58,0.05)',
            border: '1px solid rgba(212,148,58,0.15)',
          }}>
            <span style={{ fontSize: 20, fontFamily: 'var(--font-heading)', color: 'var(--amber)' }}>
              {'\u16B2'}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                Weekly Activation
              </div>
              <div className="text-xs text-dim">
                {weeklyCheckins}/7 morning check-ins this week
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Level Privileges — Car Access */}
      <div style={{ padding: '0 16px', marginTop: 20 }}>
        <div className="section-label section-label-amber">Level {currentLevel} Privileges</div>
        <PrivilegeCard privileges={privileges} />
      </div>

      {/* Next Level Preview */}
      {nextLevel && nextPrivileges && (
        <div style={{ padding: '0 16px', marginTop: 20 }}>
          <div className="section-label" style={{ color: 'var(--gold)' }}>
            Next: Level {nextLevel} — {nextPrivileges.title}
          </div>
          <PrivilegeCard privileges={nextPrivileges} isPreview />
        </div>
      )}

      {/* Level Progression */}
      <div style={{ padding: '0 16px', marginTop: 20, marginBottom: 20 }}>
        <div className="section-label">Level Progression</div>
        <LevelTable currentLevel={currentLevel} levelInfo={levelInfo} />
      </div>
    </div>
  );
}

function PrivilegeCard({ privileges, isPreview = false }) {
  const containerStyle = isPreview ? {
    padding: 14, borderRadius: 8,
    background: 'var(--surface)',
    border: '1px dashed rgba(200,169,110,0.3)',
    opacity: 0.75,
  } : {
    padding: 14, borderRadius: 8,
    background: 'var(--surface)',
    border: '1px solid var(--border-warm)',
  };

  const rows = [
    { label: 'Car Access', value: privileges.carAccess },
    privileges.curfew && { label: 'Curfew', value: privileges.curfew },
    privileges.passengers && { label: 'Passengers', value: privileges.passengers },
    privileges.weekendTrips && { label: 'Weekend Trips', value: privileges.weekendTrips },
    { label: 'Weekly Activation', value: privileges.activation },
    { label: 'Communication', value: privileges.communication },
  ].filter(Boolean);

  return (
    <div style={containerStyle}>
      {rows.map((row, i) => (
        <div key={row.label} style={{
          display: 'flex', gap: 10,
          padding: '8px 0',
          borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{
            width: 100, flexShrink: 0,
            fontSize: 10, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 1,
            color: 'var(--gold)',
            fontFamily: 'var(--font-heading)',
            paddingTop: 2,
          }}>
            {row.label}
          </div>
          <div style={{ flex: 1, fontSize: 12, color: 'var(--text)', lineHeight: 1.4 }}>
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function LevelTable({ currentLevel, levelInfo }) {
  const [expanded, setExpanded] = useState(null);

  const toggle = (level) => {
    setExpanded(prev => prev === level ? null : level);
  };

  return (
    <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border-warm)' }}>
      {LEVEL_THRESHOLDS.map(t => {
        const isCurrent = t.level === currentLevel;
        const isLocked = t.level > currentLevel;
        const isExpanded = expanded === t.level;
        const priv = LEVEL_PRIVILEGES[t.level];

        // XP display: current level shows actual progress, others show threshold
        let xpLabel;
        if (isCurrent) {
          xpLabel = t.xpToNext
            ? `${levelInfo.xpIntoLevel}/${t.xpToNext} XP`
            : `${levelInfo.totalXP} XP`;
        } else {
          xpLabel = `${t.cumulative} XP`;
        }

        return (
          <div key={t.level}>
            <button
              onClick={() => toggle(t.level)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: isCurrent ? 'rgba(212,148,58,0.08)' : 'var(--surface)',
                borderBottom: isExpanded ? 'none' : '1px solid var(--border)',
                border: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                opacity: isLocked ? 0.4 : 1,
                cursor: 'pointer', textAlign: 'left',
                fontFamily: "'Cinzel', 'Georgia', serif",
                color: 'var(--text)',
              }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isCurrent ? 'var(--amber)' : 'var(--surface-light)',
                color: isCurrent ? '#fff' : 'var(--text-dim)',
                fontSize: 13, fontWeight: 700,
                fontFamily: 'var(--font-heading)',
              }}>
                {t.level}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 13, fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  color: isCurrent ? 'var(--amber)' : 'var(--text)',
                }}>
                  {t.title}
                </div>
                <div className="text-xs text-dim" style={{
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {priv?.carAccess || ''}
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div>
                  <div className="text-xs text-dim">{xpLabel}</div>
                  {isCurrent && (
                    <div style={{
                      fontSize: 9, color: 'var(--amber)',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: 1,
                    }}>
                      CURRENT
                    </div>
                  )}
                </div>
                <span style={{
                  fontSize: 10, color: 'var(--text-dim)',
                  transition: 'transform 0.2s',
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                }}>
                  {'\u25B6'}
                </span>
              </div>
            </button>

            {isExpanded && priv && (
              <div style={{
                padding: '0 14px 12px 52px',
                background: isCurrent ? 'rgba(212,148,58,0.04)' : 'var(--surface)',
                borderBottom: '1px solid var(--border)',
              }}>
                <PrivilegeCard privileges={priv} isPreview={isLocked} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
