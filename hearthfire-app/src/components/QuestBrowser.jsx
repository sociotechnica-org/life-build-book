import { useState, useEffect } from 'react';
import { DOMAINS } from '../constants';
import { calcQuestXP, calcQuestBaseXP, calcReflectionBonusXP, getLevelInfo } from '../game-logic';
import { saveQuest, getActiveQuests, getCompletedQuests, getPlayerProfile, updateXP, unlockMilestone, completeQuest } from '../storage';
import { QUEST_DATA } from '../quest-data';
import PageBanner from './PageBanner';

const RUNE_QUEST = '\u16CF'; // ᛏ Tiwaz

export default function QuestBrowser({ onForage, initialView }) {
  const [activeDomain, setActiveDomain] = useState(DOMAINS[0].key);
  const [activeLevel, setActiveLevel] = useState(1);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [activeView, setActiveView] = useState('browse'); // browse, detail, complete
  const [reflection, setReflection] = useState('');
  const [reflectionLevel, setReflectionLevel] = useState(1);

  const profile = getPlayerProfile();
  const levelInfo = getLevelInfo(profile.totalXP);
  const playerLevel = levelInfo.level;

  const activeQuests = getActiveQuests();
  const completedQuests = getCompletedQuests();
  const completedKeys = new Set(completedQuests.map(q => q.questKey));
  const activeKeys = new Set(activeQuests.map(q => q.questKey));

  const domainQuests = QUEST_DATA.filter(q => q.domain === activeDomain && q.level === activeLevel);

  // Clamp activeLevel to player level
  useEffect(() => {
    if (activeLevel > playerLevel) setActiveLevel(playerLevel);
  }, [playerLevel]);

  // Auto-open first active quest when navigated from Dashboard
  useEffect(() => {
    if (initialView === 'active' && activeQuests.length > 0) {
      const firstActive = activeQuests[0];
      const questData = QUEST_DATA.find(qd => qd.key === firstActive.questKey);
      if (questData) {
        setSelectedQuest(questData);
        setActiveView('detail');
      }
    }
  }, []);

  const handleAccept = (quest) => {
    saveQuest({
      questKey: quest.key,
      title: quest.title,
      domain: quest.domain,
      domainName: quest.domainName,
      questLevel: quest.level,
      difficulty: quest.difficulty,
      description: quest.description,
      reflectionPrompt: quest.reflectionPrompt,
    });
    updateXP(10); // 10 XP for committing
    unlockMilestone('firstQuestStarted', 15);
    setActiveView('browse');
    setSelectedQuest(null);
  };

  const handleComplete = (quest) => {
    const activeQuest = activeQuests.find(q => q.questKey === quest.key);
    if (!activeQuest) return;
    const baseXP = calcQuestBaseXP(quest.difficulty);
    completeQuest(activeQuest.id, reflection, reflectionLevel, baseXP);
    updateXP(baseXP - 10); // subtract the 10 already awarded at start
    unlockMilestone('firstQuestDone', 25);
    if (reflectionLevel >= 2) unlockMilestone('firstL2Reflection', 20);
    if (quest.difficulty >= 2) unlockMilestone('firstChallenging', 25);
    setActiveView('browse');
    setSelectedQuest(null);
    setReflection('');
    setReflectionLevel(1);
    onForage('bonus');
  };

  // Quest Detail View
  if (selectedQuest && (activeView === 'detail' || activeView === 'complete')) {
    const quest = selectedQuest;
    const isActive = activeKeys.has(quest.key);
    const isDone = completedKeys.has(quest.key);

    return (
      <div>
        <div className="page-header">
          <button onClick={() => { setSelectedQuest(null); setActiveView('browse'); }}
            style={{ background: 'none', border: 'none', color: 'var(--amber)', fontSize: 13, cursor: 'pointer', fontFamily: "'Cinzel', 'Georgia', serif", padding: 0, marginBottom: 4 }}>
            ← Back to Quests
          </button>
          <div className="page-header-title">{quest.title}</div>
        </div>

        <div style={{ padding: '0 16px' }}>
          <div className="card">
            <div className="card-inner">
              {/* Domain & Difficulty */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{
                  padding: '3px 10px', borderRadius: 12, fontSize: 10, fontWeight: 600,
                  background: `${DOMAINS.find(d => d.key === quest.domain)?.color || '#888'}20`,
                  color: DOMAINS.find(d => d.key === quest.domain)?.color || '#888',
                  border: `1px solid ${DOMAINS.find(d => d.key === quest.domain)?.color || '#888'}40`,
                }}>
                  {quest.domainName}
                </span>
                <span className="text-xs text-dim" style={{ lineHeight: '24px' }}>
                  Level {quest.level} · {'\u2726'.repeat(quest.difficulty)}
                </span>
              </div>

              <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{quest.description}</div>

              <div style={{ padding: '12px', background: 'var(--surface-light)', borderRadius: 8, marginBottom: 16 }}>
                <div className="section-label section-label-amber">Reflection Prompt</div>
                <div style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--gold)' }}>{quest.reflectionPrompt}</div>
              </div>

              {/* XP Breakdown */}
              <div style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 16 }}>
                <div className="section-label">XP Breakdown</div>
                <div>Start bonus: +10 XP (on accept)</div>
                <div>Base: +{[50, 75, 100][quest.difficulty - 1]} XP (on complete)</div>
                <div style={{ color: 'var(--text-dim)', fontStyle: 'italic', marginTop: 4 }}>
                  Reflection bonus (awarded after parent review):
                </div>
                <div>L2 Reflection: +15 XP</div>
                <div>L3 Reflection: +30 XP</div>
                <div style={{ fontWeight: 600, color: 'var(--amber)', marginTop: 4 }}>
                  Max: {calcQuestXP(quest.difficulty, 3)} XP
                </div>
              </div>

              {/* Actions */}
              {!isActive && !isDone && activeQuests.length < 2 && (
                <button className="btn-primary" onClick={() => handleAccept(quest)}>
                  Accept Quest (+10 XP)
                </button>
              )}
              {activeQuests.length >= 2 && !isActive && !isDone && (
                <div className="text-dim text-sm text-center">Max 2 active quests. Complete one first.</div>
              )}
              {isActive && activeView !== 'complete' && (
                <button className="btn-primary" onClick={() => setActiveView('complete')}>
                  Complete Quest
                </button>
              )}
              {isDone && (
                <div style={{ textAlign: 'center', padding: 12, background: 'rgba(76,175,80,0.08)', borderRadius: 8, color: 'var(--success)' }}>
                  {'\u2713'} Quest Completed
                </div>
              )}

              {/* Completion Form */}
              {activeView === 'complete' && isActive && (
                <div className="mt-16 animate-fade-up">
                  <div className="section-label section-label-amber">Your Reflection</div>
                  <div style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--gold)', marginBottom: 8 }}>{quest.reflectionPrompt}</div>
                  <textarea
                    className="reflect-textarea"
                    placeholder="Write your reflection..."
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    style={{ minHeight: 100 }}
                  />

                  <div className="mt-12">
                    <div className="section-label">How Deep Was Your Reflection?</div>
                    {[
                      { level: 1, label: 'Basic', desc: 'Answered with some specific detail' },
                      { level: 2, label: 'Solid', desc: 'Specific examples, identified what worked AND didn\'t' },
                      { level: 3, label: 'Deep', desc: 'Connected to patterns, identified causes, generated insight' },
                    ].map(r => (
                      <button key={r.level}
                        onClick={() => setReflectionLevel(r.level)}
                        style={{
                          display: 'block', width: '100%', textAlign: 'left',
                          padding: '10px 14px', marginBottom: 6, borderRadius: 8,
                          background: reflectionLevel === r.level ? 'rgba(212,148,58,0.1)' : 'var(--surface-light)',
                          border: `1px solid ${reflectionLevel === r.level ? 'var(--amber)' : 'var(--border)'}`,
                          color: 'var(--text)', fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: 13, fontWeight: 600 }}>Level {r.level}: {r.label}</div>
                        <div className="text-xs text-dim">{r.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <div className="xp-badge mb-8">+{calcQuestBaseXP(quest.difficulty)} XP (base)</div>
                    <div className="text-xs text-dim">
                      Reflection bonus (+{calcReflectionBonusXP(reflectionLevel)} XP) awarded after parent review
                    </div>
                  </div>

                  <button
                    className="btn-primary mt-12"
                    disabled={!reflection.trim()}
                    onClick={() => handleComplete(quest)}
                  >
                    Submit & Forage
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Browse View
  return (
    <div>
      <PageBanner image="quests.png" height="28vh" filter="brightness(1.2) contrast(1.15) saturate(1.3)">
        <div className="page-header-brand">HEARTHFIRE</div>
        <div className="page-header-title">Quest Board</div>
      </PageBanner>

      {/* Active Quests Banner */}
      {activeQuests.length > 0 && (
        <div style={{ padding: '8px 16px' }}>
          <div className="section-label section-label-amber">Active Quests</div>
          {activeQuests.map(q => (
            <button key={q.id}
              onClick={() => {
                const questData = QUEST_DATA.find(qd => qd.key === q.questKey);
                if (questData) { setSelectedQuest(questData); setActiveView('detail'); }
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                padding: '12px 14px', marginBottom: 6, background: 'var(--surface)',
                borderRadius: 10, border: '1px solid rgba(212,148,58,0.2)',
                cursor: 'pointer', textAlign: 'left',
                fontFamily: "'Cinzel', 'Georgia', serif", color: 'var(--text)',
              }}
            >
              <span style={{ fontSize: 20, fontFamily: 'var(--font-heading)' }}>{RUNE_QUEST}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{q.title}</div>
                <div className="text-xs text-dim">{q.domainName} · Level {q.questLevel}</div>
              </div>
              <span className="text-xs text-amber">Active →</span>
            </button>
          ))}
        </div>
      )}

      {/* Domain Tabs */}
      <div style={{ display: 'flex', gap: 4, padding: '8px 16px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {DOMAINS.map(d => (
          <button key={d.key}
            onClick={() => setActiveDomain(d.key)}
            style={{
              padding: '6px 10px', borderRadius: 6, border: 'none',
              background: activeDomain === d.key ? `${d.color}20` : 'transparent',
              color: activeDomain === d.key ? d.color : 'var(--text-dim)',
              fontSize: 10, fontWeight: 600, fontFamily: "'Cinzel', 'Georgia', serif",
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            {d.icon} {d.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Level Selector */}
      <div style={{ display: 'flex', gap: 4, padding: '4px 16px 12px', justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5, 6, 7].map(l => {
          const locked = l > playerLevel;
          return (
            <button key={l}
              onClick={() => !locked && setActiveLevel(l)}
              disabled={locked}
              style={{
                width: 36, height: 36, borderRadius: 8, border: 'none',
                background: locked
                  ? 'var(--surface)'
                  : activeLevel === l ? 'var(--amber)' : 'var(--surface-light)',
                color: locked
                  ? '#4A4540'
                  : activeLevel === l ? '#fff' : 'var(--text-dim)',
                fontSize: 14, fontWeight: 700,
                fontFamily: "'Cinzel', 'Georgia', serif",
                cursor: locked ? 'not-allowed' : 'pointer',
              }}
            >
              {l}
            </button>
          );
        })}
      </div>

      {/* Quest List */}
      <div style={{ padding: '0 16px' }}>
        {domainQuests.length === 0 && (
          <div className="text-center text-dim" style={{ padding: 40 }}>
            No quests at this level yet.
          </div>
        )}
        {domainQuests.map(quest => {
          const isDone = completedKeys.has(quest.key);
          const isActive = activeKeys.has(quest.key);
          return (
            <button key={quest.key}
              onClick={() => { setSelectedQuest(quest); setActiveView('detail'); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '14px', marginBottom: 8, background: 'var(--surface)',
                borderRadius: 10,
                border: `1px solid ${isDone ? 'rgba(76,175,80,0.3)' : isActive ? 'rgba(212,148,58,0.3)' : 'var(--border)'}`,
                cursor: 'pointer', fontFamily: "'Cinzel', 'Georgia', serif", color: 'var(--text)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {isDone ? '\u2713 ' : isActive ? '\u16CF ' : ''}{quest.title}
                </div>
                <div className="text-xs text-dim">{'\u2726'.repeat(quest.difficulty)}</div>
              </div>
              <div className="text-xs text-dim mt-8" style={{ lineHeight: 1.4 }}>
                {quest.description.slice(0, 80)}{quest.description.length > 80 ? '...' : ''}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
