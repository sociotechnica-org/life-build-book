import { useState, useEffect } from 'react';
import { MATERIALS, MILESTONES as MILESTONE_DEFS, DOMAINS, GEAR_CATALOG, LEVEL_THRESHOLDS } from '../constants';
import { getLevelInfo, calcQuestXP, calcReflectionBonusXP } from '../game-logic';
import {
  getPlayerProfileAsync, getCheckinsAsync, getInventoryAsync,
  getForageHistoryAsync, getQuestsAsync, getMilestonesAsync,
  getCraftedGearAsync, adminUpdateReflectionLevel, reviewReflection,
  // localStorage fallbacks for offline mode
  getPlayerProfile, getCheckins, getInventory, getForageHistory,
  getQuests, getMilestones, getCraftedGear,
} from '../storage';
import { supabaseEnabled } from '../supabase';

export default function AdminPanel({ onLogout }) {
  const [tab, setTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      if (supabaseEnabled) {
        // In Supabase mode, fetch all player data (admin RLS lets us see all)
        const [profile, checkins, inventory, forages, quests, milestones, crafted] = await Promise.all([
          getPlayerProfileAsync(),
          getCheckinsAsync(),
          getInventoryAsync(),
          getForageHistoryAsync(),
          getQuestsAsync(),
          getMilestonesAsync(),
          getCraftedGearAsync(),
        ]);
        setData({ profile, checkins, inventory, forages, quests, milestones, crafted });
      } else {
        // Offline: read localStorage directly (same player data)
        setData({
          profile: getPlayerProfile(),
          checkins: getCheckins(),
          inventory: getInventory(),
          forages: getForageHistory(),
          quests: getQuests(),
          milestones: getMilestones(),
          crafted: getCraftedGear(),
        });
      }
    } catch (err) {
      console.error('Admin data load error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--text-dim)', fontSize: 14 }}>Loading player data...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--danger)', fontSize: 14 }}>Failed to load data.</div>
      </div>
    );
  }

  const levelInfo = getLevelInfo(data.profile.totalXP);
  const today = new Date().toISOString().split('T')[0];
  const todayMorning = data.checkins.find(c => c.type === 'morning' && c.date === today);
  const todayEvening = data.checkins.find(c => c.type === 'evening' && c.date === today);
  const activeQuests = data.quests.filter(q => q.status === 'active');
  const completedQuests = data.quests.filter(q => q.status === 'completed');
  const unlockedMilestones = Object.keys(data.milestones);

  const pendingReviews = data.quests.filter(q => q.status === 'completed' && q.reflectionReview === 'pending');

  const TABS = [
    { key: 'overview', label: 'Overview', icon: '\u16DF' },
    { key: 'reviews', label: `Reviews${pendingReviews.length ? ` (${pendingReviews.length})` : ''}`, icon: '\u270E' },
    { key: 'checkins', label: 'Check-ins', icon: '\u16CA' },
    { key: 'quests', label: 'Quests', icon: '\u16CF' },
    { key: 'inventory', label: 'Inventory', icon: '\u16B1' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: "'Cinzel', 'Georgia', serif" }}>
      {/* Admin Header */}
      <div style={{
        padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: 'var(--night-glow)', textTransform: 'uppercase' }}>HEARTHFIRE</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>{'\u16C1'} Command Post</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={loadData} style={{
            padding: '6px 12px', borderRadius: 6,
            background: 'var(--surface-light)', border: '1px solid var(--border)',
            color: 'var(--text-dim)', fontSize: 11, cursor: 'pointer', fontFamily: "'Cinzel', 'Georgia', serif",
          }}>
            Refresh
          </button>
          <button onClick={onLogout} style={{
            padding: '6px 12px', borderRadius: 6,
            background: 'var(--surface-light)', border: '1px solid var(--border)',
            color: 'var(--text-dim)', fontSize: 11, cursor: 'pointer', fontFamily: "'Cinzel', 'Georgia', serif",
          }}>
            Logout
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        {TABS.map(t => (
          <button key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              flex: 1, padding: '10px 8px', border: 'none',
              background: tab === t.key ? 'var(--surface-light)' : 'transparent',
              color: tab === t.key ? 'var(--night-glow)' : 'var(--text-dim)',
              fontSize: 11, fontWeight: 600, fontFamily: "'Cinzel', 'Georgia', serif",
              cursor: 'pointer', borderBottom: tab === t.key ? '2px solid var(--night-glow)' : '2px solid transparent',
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '16px' }}>
        {tab === 'overview' && <OverviewTab {...{ levelInfo, data, todayMorning, todayEvening, activeQuests, completedQuests, unlockedMilestones, pendingReviews }} onSwitchTab={setTab} />}
        {tab === 'reviews' && <PendingReviewsTab quests={data.quests} onRefresh={loadData} />}
        {tab === 'checkins' && <CheckinsTab checkins={data.checkins} />}
        {tab === 'quests' && <QuestsTab quests={data.quests} onRefresh={loadData} />}
        {tab === 'inventory' && <InventoryTab inventory={data.inventory} crafted={data.crafted} />}
      </div>
    </div>
  );
}

// ─── Overview Tab ───
function OverviewTab({ levelInfo, data, todayMorning, todayEvening, activeQuests, completedQuests, unlockedMilestones, pendingReviews, onSwitchTab }) {
  return (
    <div>
      {/* Pending Reviews Alert */}
      {pendingReviews && pendingReviews.length > 0 && (
        <button onClick={() => onSwitchTab('reviews')} style={{
          display: 'block', width: '100%', marginBottom: 16, padding: 14, borderRadius: 10, textAlign: 'center',
          background: 'rgba(212,148,58,0.08)', border: '1px solid rgba(212,148,58,0.3)', cursor: 'pointer',
          fontFamily: "'Cinzel', 'Georgia', serif", color: 'var(--text)',
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--amber)' }}>
            {pendingReviews.length} Reflection{pendingReviews.length > 1 ? 's' : ''} Awaiting Review
          </div>
          <div className="text-xs text-dim mt-8">Tap to review</div>
        </button>
      )}

      {/* Player Status Card */}
      <div style={{ padding: 16, background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: 'linear-gradient(135deg, var(--surface-light), var(--surface))',
            border: '2px solid var(--night-glow)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
          }}>{'\u16DF'}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: 'var(--night-glow)', letterSpacing: 2, textTransform: 'uppercase' }}>Level {levelInfo.level}</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{levelInfo.title}</div>
            <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>{levelInfo.totalXP} XP total</div>
          </div>
        </div>
        {levelInfo.xpNeeded && (
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>
              <span>Level {levelInfo.level}</span>
              <span style={{ color: 'var(--night-glow)' }}>{levelInfo.xpIntoLevel} / {levelInfo.xpNeeded}</span>
              <span>Level {levelInfo.nextLevel}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${Math.round(levelInfo.progress * 100)}%`, background: 'linear-gradient(90deg, var(--night-glow), var(--night-silver))' }} />
            </div>
          </div>
        )}
      </div>

      {/* Today's Status */}
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>Today</div>

      <StatusRow
        icon={todayMorning ? '\u2713' : '\u2014'}
        label="Dawn March"
        detail={todayMorning
          ? `Score: ${todayMorning.totalScore}/8 \u00B7 ${todayMorning.gamingUnlocked ? '\u2713 Unlocked' : '\u2717 Locked'} \u00B7 +${todayMorning.xpEarned} XP`
          : 'Not submitted yet'}
        highlight={!!todayMorning}
      />
      <StatusRow
        icon={todayEvening ? '\u2713' : '\u2014'}
        label="Night Watch"
        detail={todayEvening
          ? `Rating: ${'\u2726'.repeat(todayEvening.dayRating || 0)} \u00B7 +${todayEvening.xpEarned} XP`
          : 'Not submitted yet'}
        highlight={!!todayEvening}
      />

      {/* Gaming Access */}
      <div style={{
        marginTop: 12, padding: 14, borderRadius: 10, textAlign: 'center',
        background: todayMorning?.gamingUnlocked ? 'rgba(76,175,80,0.08)' : todayMorning ? 'rgba(231,76,60,0.08)' : 'var(--surface)',
        border: `1px solid ${todayMorning?.gamingUnlocked ? 'rgba(76,175,80,0.3)' : todayMorning ? 'rgba(231,76,60,0.2)' : 'var(--border)'}`,
      }}>
        <div style={{ fontSize: 18, marginBottom: 4, fontFamily: 'var(--font-heading)', letterSpacing: 2 }}>
          {todayMorning?.gamingUnlocked ? '\u2713' : todayMorning ? '\u2717' : '\u2014'}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: todayMorning?.gamingUnlocked ? 'var(--success)' : 'var(--text-dim)' }}>
          {todayMorning?.gamingUnlocked ? 'Gaming Access: UNLOCKED' : todayMorning ? 'Gaming Access: LOCKED' : 'Awaiting check-in'}
        </div>
      </div>

      {/* Active Quests */}
      <div style={{ marginTop: 20, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>
        Active Quests ({activeQuests.length})
      </div>
      {activeQuests.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-dim)', padding: '8px 0' }}>No active quests</div>}
      {activeQuests.map(q => (
        <div key={q.id} style={{ padding: '10px 12px', marginBottom: 6, background: 'var(--surface)', borderRadius: 8, border: '1px solid rgba(212,148,58,0.2)' }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{'\u2694\uFE0F'} {q.title}</div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>{q.domainName || q.domain} · Level {q.questLevel}</div>
        </div>
      ))}

      {/* Stats Summary */}
      <div style={{ marginTop: 20, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>Stats</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <StatBox label="Quests Done" value={completedQuests.length} />
        <StatBox label="Total Forages" value={data.forages.length} />
        <StatBox label="Milestones" value={unlockedMilestones.length} />
      </div>

      {/* Milestones */}
      <div style={{ marginTop: 20, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>Milestones</div>
      {MILESTONE_DEFS.map(m => {
        const unlocked = !!data.milestones[m.key];
        return (
          <div key={m.key} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0',
            color: unlocked ? 'var(--text)' : 'var(--text-dim)',
            opacity: unlocked ? 1 : 0.5,
          }}>
            <span style={{ fontSize: 14 }}>{unlocked ? '\u2705' : '\u25CB'}</span>
            <span style={{ flex: 1, fontSize: 12 }}>{m.label}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--amber)' }}>+{m.xp} XP</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Check-ins Tab ───
function CheckinsTab({ checkins }) {
  // Group by date
  const grouped = {};
  checkins.forEach(c => {
    if (!grouped[c.date]) grouped[c.date] = {};
    grouped[c.date][c.type] = c;
  });
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 12 }}>
        Check-in History ({checkins.length} total)
      </div>

      {dates.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>No check-ins recorded yet.</div>}

      {dates.map(date => {
        const morning = grouped[date].morning;
        const evening = grouped[date].evening;
        const dayXP = (morning?.xpEarned || 0) + (evening?.xpEarned || 0);

        return (
          <div key={date} style={{ marginBottom: 16, background: 'var(--surface)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
            {/* Date header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--surface-light)', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>
                {new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>
              <div style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600 }}>+{dayXP} XP</div>
            </div>

            <div style={{ padding: '10px 14px' }}>
              {/* Morning */}
              {morning ? (
                <div style={{ marginBottom: evening ? 12 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <span style={{ fontSize: 14, color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>{'\u16B2'}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>Dawn March</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-dim)' }}>
                      Score: {morning.totalScore}/8
                    </span>
                    <span style={{
                      fontSize: 10, padding: '2px 8px', borderRadius: 4,
                      background: morning.gamingUnlocked ? 'rgba(76,175,80,0.15)' : 'rgba(231,76,60,0.1)',
                      color: morning.gamingUnlocked ? 'var(--success)' : 'var(--danger)',
                    }}>
                      {morning.gamingUnlocked ? '\u2713 Yes' : '\u2717 No'}
                    </span>
                  </div>
                  {morning.items && (
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 4 }}>
                      {morning.items.map((item, i) => (
                        <span key={i} style={{
                          fontSize: 10, padding: '2px 6px', borderRadius: 4,
                          background: item.score === 2 ? 'rgba(76,175,80,0.1)' : item.score === 1 ? 'rgba(212,148,58,0.1)' : 'rgba(231,76,60,0.08)',
                          color: item.score === 2 ? 'var(--success)' : item.score === 1 ? 'var(--amber)' : 'var(--danger)',
                        }}>
                          {item.key}: {item.score === 2 ? '✓' : item.score === 1 ? '~' : '✗'}
                        </span>
                      ))}
                    </div>
                  )}
                  {morning.pulse?.threats && (
                    <div style={{ fontSize: 11, color: 'var(--text-dim)', fontStyle: 'italic', marginTop: 4 }}>
                      Threats: "{morning.pulse.threats}"
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: evening ? 12 : 0 }}>
                  {'\u16B2'} Dawn March — not submitted
                </div>
              )}

              {/* Evening */}
              {evening ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <span style={{ fontSize: 14, color: 'var(--night-glow)', fontFamily: 'var(--font-heading)' }}>{'\u16D7'}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>Night Watch</span>
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-dim)' }}>
                      {'\u2726'.repeat(evening.dayRating || 0)}{'\u25CB'.repeat(5 - (evening.dayRating || 0))}
                    </span>
                  </div>
                  {evening.reflections && (
                    <div style={{ padding: '8px 10px', background: 'var(--surface-light)', borderRadius: 6, fontSize: 12, lineHeight: 1.5 }}>
                      {evening.reflections.whatWorked && (
                        <div style={{ marginBottom: 6 }}>
                          <span style={{ color: 'var(--night-glow)', fontWeight: 600 }}>What worked: </span>
                          <span style={{ color: 'var(--text)' }}>{evening.reflections.whatWorked}</span>
                        </div>
                      )}
                      {evening.reflections.obstacles && (
                        <div style={{ marginBottom: 6 }}>
                          <span style={{ color: 'var(--night-glow)', fontWeight: 600 }}>Obstacles: </span>
                          <span style={{ color: 'var(--text)' }}>{evening.reflections.obstacles}</span>
                        </div>
                      )}
                      {evening.reflections.tomorrow && (
                        <div>
                          <span style={{ color: 'var(--night-glow)', fontWeight: 600 }}>Tomorrow: </span>
                          <span style={{ color: 'var(--text)' }}>{evening.reflections.tomorrow}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
                  {'\u16D7'} Night Watch — not submitted
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Quests Tab ───
function QuestsTab({ quests, onRefresh }) {
  const [editingId, setEditingId] = useState(null);
  const [newLevel, setNewLevel] = useState(1);

  const active = quests.filter(q => q.status === 'active');
  const completed = quests.filter(q => q.status === 'completed');

  const handleSaveLevel = async (quest) => {
    const newXP = calcQuestXP(quest.difficulty || 1, newLevel);
    await adminUpdateReflectionLevel(quest.id, newLevel, newXP);
    setEditingId(null);
    onRefresh();
  };

  return (
    <div>
      {/* Active */}
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>
        Active ({active.length})
      </div>
      {active.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 16 }}>No active quests</div>}
      {active.map(q => (
        <div key={q.id} style={{ padding: 14, marginBottom: 8, background: 'var(--surface)', borderRadius: 10, border: '1px solid rgba(212,148,58,0.2)' }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{q.title}</div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 2 }}>{q.domainName || q.domain} · Level {q.questLevel} · {'⭐'.repeat(q.difficulty || 1)}</div>
          <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 6, lineHeight: 1.5 }}>{q.description}</div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 6 }}>
            Started: {new Date(q.startedAt).toLocaleDateString()}
          </div>
        </div>
      ))}

      {/* Completed */}
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 20, marginBottom: 8 }}>
        Completed ({completed.length})
      </div>
      {completed.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>No completed quests</div>}
      {completed.map(q => (
        <div key={q.id} style={{ padding: 14, marginBottom: 10, background: 'var(--surface)', borderRadius: 10, border: '1px solid rgba(76,175,80,0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{'\u2705'} {q.title}</div>
            <div style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600 }}>+{q.xpEarned} XP</div>
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 2 }}>
            {q.domainName || q.domain} · Level {q.questLevel} · Completed {q.completedAt ? new Date(q.completedAt).toLocaleDateString() : ''}
          </div>

          {/* Reflection */}
          {q.reflection && (
            <div style={{ marginTop: 10, padding: '10px 12px', background: 'var(--surface-light)', borderRadius: 8, borderLeft: '3px solid var(--night-glow)' }}>
              <div style={{ fontSize: 10, color: 'var(--night-glow)', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
                Reflection (Level {q.reflectionLevel || 1})
              </div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{q.reflection}</div>

              {/* Prompt shown */}
              {q.reflectionPrompt && (
                <div style={{ fontSize: 11, color: 'var(--text-dim)', fontStyle: 'italic', marginTop: 6, paddingTop: 6, borderTop: '1px solid var(--border)' }}>
                  Prompt: "{q.reflectionPrompt}"
                </div>
              )}
            </div>
          )}

          {/* Admin: Adjust Reflection Level */}
          {editingId === q.id ? (
            <div style={{ marginTop: 10, display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>Set level:</span>
              {[1, 2, 3].map(l => (
                <button key={l} onClick={() => setNewLevel(l)} style={{
                  width: 32, height: 32, borderRadius: 6, border: 'none',
                  background: newLevel === l ? 'var(--night-glow)' : 'var(--surface-light)',
                  color: newLevel === l ? '#fff' : 'var(--text-dim)',
                  fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Cinzel', 'Georgia', serif",
                }}>{l}</button>
              ))}
              <button onClick={() => handleSaveLevel(q)} style={{
                padding: '6px 14px', borderRadius: 6,
                background: 'rgba(76,175,80,0.15)', border: '1px solid rgba(76,175,80,0.3)',
                color: 'var(--success)', fontSize: 11, fontWeight: 600,
                fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
              }}>Save</button>
              <button onClick={() => setEditingId(null)} style={{
                padding: '6px 10px', borderRadius: 6,
                background: 'transparent', border: '1px solid var(--border)',
                color: 'var(--text-dim)', fontSize: 11,
                fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
              }}>Cancel</button>
            </div>
          ) : (
            q.reflection && (
              <button onClick={() => { setEditingId(q.id); setNewLevel(q.reflectionLevel || 1); }} style={{
                marginTop: 8, padding: '6px 12px', borderRadius: 6,
                background: 'var(--surface-light)', border: '1px solid var(--border)',
                color: 'var(--text-dim)', fontSize: 10, fontWeight: 600,
                fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
              }}>
                {'\u270F\uFE0F'} Adjust Reflection Level
              </button>
            )
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Inventory Tab ───
function InventoryTab({ inventory, crafted }) {
  const craftedKeys = new Set((crafted || []).map(c => c.gearKey));

  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 8 }}>Materials</div>
      {Object.entries(MATERIALS).map(([key, mat]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 20 }}>{mat.icon}</span>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: mat.color }}>{mat.name}</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{inventory[key] || 0}</div>
        </div>
      ))}

      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 20, marginBottom: 8 }}>Provisions</div>
      <div style={{ display: 'flex', gap: 12 }}>
        {[{ key: 'gasCoins', icon: '\u16B1', label: 'Gas' }, { key: 'snackTokens', icon: '\u16C3', label: 'Snacks' }, { key: 'gameCredits', icon: '\u16B7', label: 'Games' }].map(p => (
          <div key={p.key} style={{ flex: 1, textAlign: 'center', padding: 12, background: 'var(--surface)', borderRadius: 8, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 18 }}>{p.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{inventory[p.key] || 0}</div>
            <div style={{ fontSize: 9, color: 'var(--text-dim)' }}>{p.label}</div>
          </div>
        ))}
      </div>

      {craftedKeys.size > 0 && (
        <>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 20, marginBottom: 8 }}>Crafted Gear</div>
          {Object.values(GEAR_CATALOG).flatMap(cat => cat.items).filter(item => craftedKeys.has(item.key)).map(item => (
            <div key={item.key} style={{ padding: '8px 12px', marginBottom: 4, background: 'rgba(76,175,80,0.06)', borderRadius: 6, border: '1px solid rgba(76,175,80,0.2)', fontSize: 13 }}>
              {'\u2705'} {item.name} ({item.price})
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Pending Reviews Tab ───
function PendingReviewsTab({ quests, onRefresh }) {
  const [reviewLevels, setReviewLevels] = useState({});

  const pending = quests.filter(q => q.status === 'completed' && q.reflectionReview === 'pending');
  const reviewed = quests.filter(q => q.status === 'completed' && q.reflectionReview === 'reviewed');

  const handleReview = (quest, level) => {
    reviewReflection(quest.id, level);
    onRefresh();
  };

  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 12 }}>
        Pending Reviews ({pending.length})
      </div>

      {pending.length === 0 && (
        <div style={{ fontSize: 12, color: 'var(--text-dim)', padding: '8px 0' }}>No reflections awaiting review</div>
      )}

      {pending.map(q => {
        const selectedLevel = reviewLevels[q.id] || 1;
        return (
          <div key={q.id} className="card" style={{ margin: '0 0 12px', borderLeft: '3px solid var(--amber)' }}>
            <div className="card-inner">
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{q.title}</div>
              <div className="text-xs text-dim" style={{ marginTop: 2 }}>
                {q.domainName || q.domain} \u00B7 Level {q.questLevel} \u00B7 Completed {q.completedAt ? new Date(q.completedAt).toLocaleDateString() : ''}
              </div>

              {/* Reflection text */}
              <div style={{ marginTop: 10, padding: 12, background: 'var(--surface-light)', borderRadius: 8 }}>
                <div className="section-label section-label-amber">Reflection</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text)' }}>{q.reflection}</div>
                {q.reflectionPrompt && (
                  <div className="text-xs text-dim" style={{ marginTop: 8, fontStyle: 'italic' }}>
                    Prompt: &ldquo;{q.reflectionPrompt}&rdquo;
                  </div>
                )}
              </div>

              {/* Player self-assessment */}
              <div className="text-xs text-dim" style={{ marginTop: 8 }}>
                Self-assessed: Level {q.selfAssessedLevel || q.reflectionLevel || 1}
              </div>

              {/* Parent scoring */}
              <div style={{ marginTop: 10, display: 'flex', gap: 6, alignItems: 'center' }}>
                <span className="text-xs text-dim">Award level:</span>
                {[1, 2, 3].map(l => (
                  <button key={l}
                    onClick={() => setReviewLevels(prev => ({ ...prev, [q.id]: l }))}
                    style={{
                      width: 40, height: 40, borderRadius: 8, border: 'none',
                      background: selectedLevel === l ? 'var(--amber)' : 'var(--surface-light)',
                      color: selectedLevel === l ? '#fff' : 'var(--text-dim)',
                      fontSize: 14, fontWeight: 700, cursor: 'pointer',
                      fontFamily: "'Cinzel', 'Georgia', serif",
                    }}
                  >{l}</button>
                ))}
                <div className="text-xs" style={{ color: 'var(--amber)', marginLeft: 4 }}>
                  +{calcReflectionBonusXP(selectedLevel)} XP
                </div>
              </div>

              <button
                onClick={() => handleReview(q, selectedLevel)}
                className="btn-primary"
                style={{ marginTop: 10, padding: '10px 20px', fontSize: 13 }}
              >
                Approve Reflection
              </button>
            </div>
          </div>
        );
      })}

      {/* Recently Reviewed */}
      {reviewed.length > 0 && (
        <>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--warm-gray)', marginTop: 20, marginBottom: 8 }}>
            Recently Reviewed ({reviewed.length})
          </div>
          {reviewed.slice(0, 10).map(q => (
            <div key={q.id} style={{
              padding: 12, marginBottom: 6, background: 'var(--surface)', borderRadius: 8,
              border: '1px solid rgba(76,175,80,0.2)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{q.title}</div>
              <div className="text-xs text-dim">
                Self: L{q.selfAssessedLevel || q.reflectionLevel || 1} \u00B7 Awarded: L{q.awardedReflectionLevel || '?'} \u00B7 +{q.reflectionBonusXP || 0} XP bonus
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── Helpers ───
function StatusRow({ icon, label, detail, highlight }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', marginBottom: 6,
      background: 'var(--surface)', borderRadius: 8, border: `1px solid ${highlight ? 'rgba(76,175,80,0.2)' : 'var(--border)'}`,
    }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{detail}</div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div style={{ textAlign: 'center', padding: 12, background: 'var(--surface)', borderRadius: 8, border: '1px solid var(--border)' }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>{value}</div>
      <div style={{ fontSize: 9, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
    </div>
  );
}
