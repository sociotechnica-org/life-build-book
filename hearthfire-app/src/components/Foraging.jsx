import { useState, useEffect, useCallback, useRef } from 'react';
import { MATERIALS, RARITY, LEVEL_MATS, LOCATIONS, SCENES, PROVISIONS } from '../constants';
import { rollReward, shuffleArray } from '../game-logic';
import { updateInventory, saveForage, getInventory } from '../storage';
import PageBanner from './PageBanner';

// ─── Color palette ───
const C = {
  bg: "#0E0C0A", surface: "#1A1410", surfaceLight: "#241E18",
  amber: "#D4943A", gold: "#C8A96E", warmGray: "#6B6560",
  text: "#E8E0D8", textDim: "#8B8580", border: "#2A2420",
};

const P = {
  bg: "linear-gradient(170deg, #F0E4D0 0%, #E4D4B8 30%, #D8C8A8 70%, #D0BC98 100%)",
  border: "#C8AC80", textDark: "#4A3A28", textMid: "#6B5840", textLight: "#8B7558",
  sealBg: "radial-gradient(circle at 40% 35%, #B83020 0%, #7A1818 70%, #501010 100%)",
  sealBorder: "#6A1515", sealText: "#E8C8A0",
};

// ─── Sealed Card ───
function SealedCard({ loc, selected, selectable, onClick, dealt, idx }) {
  const cardRef = useRef(null);
  const borderColor = selected ? C.amber : P.border;
  const shadow = selected ? `0 0 28px ${C.amber}50` : "0 3px 14px rgba(0,0,0,0.4)";

  return (
    <div ref={cardRef} onClick={selectable ? onClick : undefined}
      style={{
        width: 100, height: 160, borderRadius: 12, background: P.bg,
        border: `2px solid ${borderColor}`, cursor: selectable ? "pointer" : "default",
        opacity: dealt ? 1 : 0, transform: dealt ? "translateY(0) scale(1)" : "translateY(30px) scale(0.85)",
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.08}s`,
        display: "flex", flexDirection: "column", alignItems: "center",
        position: "relative", overflow: "hidden", boxShadow: shadow,
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, #8B6914 8px, #8B6914 9px)" }} />
      <div style={{ paddingTop: 12, textAlign: "center", position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: 26, display: "block", lineHeight: 1 }}>{loc.icon}</span>
        <div style={{ fontSize: 11, fontWeight: 700, marginTop: 4, color: P.textDark, fontFamily: "'Cinzel', 'Georgia', serif" }}>{loc.name}</div>
        <div style={{ fontSize: 7, color: P.textLight, marginTop: 2, lineHeight: 1.3, padding: "0 6px", fontStyle: "italic" }}>{loc.desc}</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: P.sealBg, border: `2px solid ${P.sealBorder}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35), inset 0 1px 2px rgba(255,255,255,0.15)" }}>
          <span style={{ fontSize: 14, color: P.sealText, fontFamily: "'Cinzel', 'Georgia', serif", fontWeight: 700 }}>?</span>
        </div>
        <div style={{ marginTop: 4, fontSize: 7, letterSpacing: 2, textTransform: "uppercase", color: P.textMid, fontWeight: 600 }}>Sealed</div>
      </div>
      {selected && (
        <div style={{ position: "absolute", top: 4, right: 4, zIndex: 6, background: C.amber, borderRadius: "50%",
          width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 10, color: "#fff", fontWeight: 700 }}>{"\u2713"}</div>
      )}
    </div>
  );
}

// ─── Revealed Card ───
function RevealedCard({ loc, reward, isChosen, dimmed }) {
  const mat = reward?.material ? MATERIALS[reward.material] : null;
  const rar = reward?.rarity ? RARITY[reward.rarity] : null;
  const prov = reward?.type === "provision";
  const rarityKey = reward?.rarity || "common";

  const RARITY_BG = { common: "rgba(120,115,110,0.12)", uncommon: "rgba(74,144,217,0.18)", rare: "rgba(155,89,182,0.22)", wildcard: "rgba(241,196,15,0.22)" };
  const RARITY_BORDER = { common: C.border, uncommon: "rgba(74,144,217,0.5)", rare: "rgba(155,89,182,0.6)", wildcard: "rgba(241,196,15,0.6)" };

  const borderColor = isChosen ? C.amber : (prov ? C.border : (RARITY_BORDER[rarityKey] || C.border));
  let shadow = "0 3px 14px rgba(0,0,0,0.5)";
  if (isChosen) shadow = `0 0 40px ${C.amber}60`;

  return (
    <div style={{
      width: 100, height: 160, borderRadius: 12, background: SCENES[loc.scene],
      border: `2px solid ${borderColor}`, display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden", boxShadow: shadow,
      filter: dimmed ? "brightness(0.4) saturate(0.4)" : "none",
      animation: "cardReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
      transition: "filter 0.4s ease",
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: RARITY_BG[rarityKey] || RARITY_BG.common }} />
      <div style={{ padding: "8px 6px 2px", textAlign: "center", position: "relative", zIndex: 3 }}>
        <span style={{ fontSize: 20, display: "block", lineHeight: 1 }}>{loc.icon}</span>
        <div style={{ fontSize: 10, fontWeight: 700, marginTop: 2, color: "#fff", fontFamily: "'Cinzel', 'Georgia', serif", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>{loc.name}</div>
      </div>
      <div style={{ flex: 1, margin: "2px 5px 5px", borderRadius: 8,
        background: isChosen ? `linear-gradient(180deg, rgba(212,148,58,0.18) 0%, rgba(212,148,58,0.06) 100%)` : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        border: isChosen ? `1px solid ${C.amber}40` : "1px solid rgba(255,255,255,0.1)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "4px", position: "relative", zIndex: 3 }}>
        {prov ? (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 22, display: "block" }}>{reward.item.icon}</span>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#5DBE6B", marginTop: 2 }}>{reward.item.name}</div>
            <div style={{ fontSize: 8, color: "#bbb" }}>{reward.item.value}</div>
          </div>
        ) : reward.type === "wildcard" ? (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 26 }}>{"\u2728"}</span>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#F1C40F", marginTop: 2 }}>Strange Essence</div>
            <div style={{ fontSize: 7, color: "#F1C40F", opacity: 0.8, fontStyle: "italic" }}>Choose its form...</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 22, display: "block" }}>{mat?.icon || ""}</span>
            <div style={{ fontSize: 9, fontWeight: 700, color: mat?.color || "#fff", marginTop: 2 }}>{mat?.name || ""} × {rar?.units || 0}</div>
            {(rarityKey === "rare" || rarityKey === "wildcard") && rar && (
              <div style={{ display: "inline-block", fontSize: 7, color: rar.color, marginTop: 2, padding: "1px 5px", borderRadius: 6,
                border: `1px solid ${rar.color}60`, background: `${rar.color}25`, fontWeight: 700 }}>{rar.name}</div>
            )}
          </div>
        )}
      </div>
      {isChosen && (
        <div style={{ position: "absolute", top: 4, right: 4, zIndex: 6, background: C.amber, borderRadius: "50%",
          width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, color: "#fff", fontWeight: 700, boxShadow: `0 0 14px ${C.amber}` }}>{"\u2713"}</div>
      )}
    </div>
  );
}

// ─── Wildcard Picker ───
function WCPicker({ mats, onPick }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
      <div style={{ background: C.surface, borderRadius: 16, border: "2px solid #F1C40F", padding: 24, maxWidth: 340, width: "90%", boxShadow: "0 0 50px rgba(241,196,15,0.2)" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 32 }}>{"\u2728"}</span>
          <h2 style={{ fontSize: 18, color: "#F1C40F", margin: "4px 0", fontFamily: "'Cinzel', 'Georgia', serif" }}>Legendary!</h2>
          <p style={{ color: C.textDim, fontSize: 11, margin: 0 }}>Choose which material (×3 units)</p>
        </div>
        {mats.map(k => {
          const m = MATERIALS[k];
          return (
            <button key={k} onClick={() => onPick(k)} style={{
              display: "flex", alignItems: "center", gap: 10, width: "100%",
              padding: "10px 12px", background: C.surfaceLight,
              border: `1px solid ${C.border}`, borderRadius: 10,
              cursor: "pointer", color: C.text, marginBottom: 6,
              fontFamily: "'Cinzel', 'Georgia', serif",
            }}>
              <span style={{ fontSize: 18 }}>{m.icon}</span>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: m.color }}>{m.name}</div>
                <div style={{ fontSize: 9, color: C.textDim }}>{m.theme}</div>
              </div>
              <span style={{ fontSize: 10, color: C.textDim }}>+3</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ═══════ MAIN FORAGING COMPONENT ═══════
export default function Foraging({ type = 'standard', level = 1, onComplete }) {
  const [phase, setPhase] = useState("selecting"); // selecting, confirming, revealing, result
  const [cards, setCards] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [dealt, setDealt] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState([]);
  const [showWC, setShowWC] = useState(false);

  useEffect(() => {
    const locs = shuffleArray(LOCATIONS).slice(0, 7);
    const isBonus = type === 'bonus';
    const c = locs.map(l => ({
      location: l,
      reward: rollReward(level, isBonus),
    }));
    setCards(c);
    setTimeout(() => setDealt(true), 80);
  }, [level, type]);

  function pick(i) {
    if (phase !== "selecting") return;
    setChosen(i);
    setPhase("confirming");
  }

  function confirmChoice() {
    const others = [];
    for (let i = 0; i < cards.length; i++) {
      if (i !== chosen) others.push({ idx: i, val: cards[i].reward.sortVal || 0 });
    }
    others.sort((a, b) => a.val - b.val);
    const order = others.map(o => o.idx);
    order.push(chosen);

    setRevealedIndices([]);
    setPhase("revealing");

    const delay = 600;
    order.forEach((cardIdx, step) => {
      setTimeout(() => {
        setRevealedIndices(prev => [...prev, cardIdx]);
        if (step === order.length - 1) {
          setTimeout(() => {
            const rw = cards[chosen].reward;
            if (rw.type === "wildcard") setShowWC(true);
            else applyReward(rw, cards[chosen].location.name);
            setPhase("result");
          }, 600);
        }
      }, delay * (step + 1));
    });
  }

  function cancelChoice() {
    setChosen(null);
    setPhase("selecting");
  }

  function applyReward(rw, locName) {
    if (rw.type === "provision") {
      const p = rw.item;
      if (p.name === "Gas Coin") updateInventory("gasCoins", 1);
      else if (p.name === "Snack Token") updateInventory("snackTokens", 1);
      else if (p.name === "Game Credit") updateInventory("gameCredits", 1);
    } else {
      updateInventory(rw.material, rw.units || 3);
    }
    saveForage({
      forageType: type,
      locationName: locName,
      reward: rw,
    });
  }

  function wcPick(k) {
    applyReward({ type: "material", material: k, rarity: "wildcard", units: 3 }, cards[chosen]?.location.name || "?");
    setShowWC(false);
  }

  const chosenReward = chosen !== null && cards[chosen] ? cards[chosen].reward : null;
  const chosenMat = chosenReward?.material ? MATERIALS[chosenReward.material] : null;
  const chosenRar = chosenReward?.rarity ? RARITY[chosenReward.rarity] : null;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Cinzel', 'Georgia', serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <PageBanner image="foraging.png" height="28vh" filter="brightness(1.15) contrast(1.1) saturate(1.25)">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div className="page-header-brand">HEARTHFIRE</div>
            <div className="page-header-title">The Wilds</div>
          </div>
          <div style={{ fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: 1 }}>
            {type === 'bonus' ? 'Bonus Forage' : 'Standard Forage'}
          </div>
        </div>
      </PageBanner>

      {/* Main Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}>
        {/* Instructions */}
        <div style={{ textAlign: "center", marginBottom: 12, minHeight: 48 }}>
          {phase === "selecting" && (
            <div>
              <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 3 }}>Scout the terrain</div>
              <div style={{ color: C.textDim, fontSize: 11 }}>Choose where to break the seal.</div>
            </div>
          )}
          {phase === "confirming" && chosen !== null && cards[chosen] && (
            <div>
              <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Search {cards[chosen].location.name}?</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                <button onClick={confirmChoice} style={{
                  padding: "8px 20px", borderRadius: 8, background: C.amber, border: "none",
                  color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Cinzel', 'Georgia', serif",
                }}>Break the Seal</button>
                <button onClick={cancelChoice} style={{
                  padding: "8px 16px", borderRadius: 8, background: "transparent",
                  border: `1px solid ${C.border}`, color: C.textDim, fontSize: 12,
                  cursor: "pointer", fontFamily: "'Cinzel', 'Georgia', serif",
                }}>Pick Again</button>
              </div>
            </div>
          )}
          {phase === "revealing" && (
            <div style={{ color: C.amber, fontSize: 16, fontWeight: 600 }}>
              {revealedIndices.length < cards.length - 1 ? "Breaking seals..." : "Your find..."}
            </div>
          )}
          {phase === "result" && (
            <div>
              <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 2 }}>Expedition Complete</div>
              {chosen !== null && cards[chosen] && <div style={{ color: C.textDim, fontSize: 11 }}>You searched {cards[chosen].location.name}</div>}
            </div>
          )}
        </div>

        {/* Card Grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 480, margin: "0 auto" }}>
          {cards.map((c, i) => {
            const isRevealed = revealedIndices.includes(i);
            const isChosen = i === chosen;
            const dimmed = (phase === "result" || phase === "revealing") && isRevealed && !isChosen;

            if (isRevealed) {
              return <RevealedCard key={i} loc={c.location} reward={c.reward} isChosen={isChosen} dimmed={dimmed} />;
            }
            return (
              <SealedCard key={i} idx={i} loc={c.location} dealt={dealt}
                selectable={phase === "selecting"}
                selected={isChosen && phase === "confirming"}
                onClick={() => pick(i)} />
            );
          })}
        </div>

        {/* Result Banner */}
        {phase === "result" && chosen !== null && !showWC && chosenReward && (
          <div style={{ marginTop: 20, animation: "fadeUp 0.5s ease both", textAlign: "center" }}>
            <div style={{
              display: "inline-block", background: C.surfaceLight,
              border: `2px solid ${C.amber}`, borderRadius: 12, padding: "14px 24px",
              boxShadow: `0 0 30px ${C.amber}25`,
            }}>
              {chosenReward.type === "provision" ? (
                <div>
                  <span style={{ fontSize: 26 }}>{chosenReward.item.icon}</span>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#4CAF50", marginTop: 3 }}>{chosenReward.item.name}</div>
                  <div style={{ fontSize: 11, color: C.textDim }}>{chosenReward.item.value} — {chosenReward.item.desc}</div>
                </div>
              ) : chosenReward.type === "wildcard" ? (
                <div>
                  <span style={{ fontSize: 26 }}>{"\u2728"}</span>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#F1C40F", marginTop: 3 }}>Strange Essence</div>
                </div>
              ) : (
                <div>
                  <span style={{ fontSize: 26 }}>{chosenMat?.icon || ""}</span>
                  <div style={{ fontSize: 14, fontWeight: 600, color: chosenMat?.color || "#fff", marginTop: 3 }}>
                    {chosenMat?.name || ""} × {chosenReward.units || 3}
                  </div>
                  <div style={{ fontSize: 10, color: chosenRar?.color || "#fff" }}>{chosenRar?.name || ""} find</div>
                </div>
              )}
              <div style={{ fontSize: 9, color: C.warmGray, marginTop: 6, borderTop: `1px solid ${C.border}`, paddingTop: 6 }}>Added to inventory</div>
            </div>
            <div style={{ marginTop: 16 }}>
              <button onClick={onComplete} style={{
                padding: "12px 28px", borderRadius: 10,
                background: `linear-gradient(135deg, ${C.amber} 0%, #B87D2A 100%)`,
                border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "'Cinzel', 'Georgia', serif",
                boxShadow: `0 4px 20px ${C.amber}40`,
              }}>Return to Camp</button>
            </div>
          </div>
        )}
      </div>

      {showWC && <WCPicker mats={LEVEL_MATS[Math.min(level, 4)]} onPick={wcPick} />}

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes cardReveal { from { opacity:0; transform:scale(0.85) rotateY(90deg); } 50% { opacity:1; transform:scale(1.05) rotateY(0deg); } to { transform:scale(1) rotateY(0deg); } }
      `}</style>
    </div>
  );
}
