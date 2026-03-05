import { useState, useEffect, useCallback, useRef } from "react";

var MATERIALS = {
  hearthstone: { name: "Hearthstone", theme: "Warmth & Home", color: "#D4943A", icon: "\u{1F525}", gear: "Hearth" },
  ironwood:    { name: "Ironwood",    theme: "Strength & Journey", color: "#6B4E3D", icon: "\u{1FAB5}", gear: "Mount" },
  emberDust:   { name: "Ember Dust",  theme: "Energy & Spark", color: "#CD7F32", icon: "\u2728", gear: "Forge" },
  curedLeather:{ name: "Cured Leather",theme: "Protection & Craft", color: "#9B7B2F", icon: "\u{1F6E1}\uFE0F", gear: "Wardrobe" },
  wovenCord:   { name: "Woven Cord",  theme: "Connection & Utility", color: "#8B8B8B", icon: "\u{1FAA2}", gear: "General" },
};

var PROVISIONS = [
  { name: "Gas Coin", value: "$0.50", icon: "\u26FD", desc: "Applied to gas fund", sortVal: 0.5 },
  { name: "Gas Coin", value: "$0.75", icon: "\u26FD", desc: "Applied to gas fund", sortVal: 0.75 },
  { name: "Gas Coin", value: "$1.00", icon: "\u26FD", desc: "Applied to gas fund", sortVal: 1 },
  { name: "Snack Token", value: "1 item", icon: "\u{1F36B}", desc: "Free snack from grocery run", sortVal: 1 },
  { name: "Game Credit", value: "$1.00", icon: "\u{1F3AE}", desc: "Toward game purchase fund", sortVal: 1 },
  { name: "Game Credit", value: "$2.00", icon: "\u{1F3AE}", desc: "Toward game purchase fund", sortVal: 2 },
];

var RARITY = {
  common:   { name: "Common",   units: 1, color: "#8B8680", chance: 0.70, sortVal: 10 },
  uncommon: { name: "Uncommon", units: 2, color: "#4A90D9", chance: 0.225, sortVal: 20 },
  rare:     { name: "Rare",     units: 5, color: "#9B59B6", chance: 0.05, sortVal: 50 },
  wildcard: { name: "Legendary", units: 0, color: "#F1C40F", chance: 0.025, sortVal: 100 },
};

var LEVEL_MATS = {
  1: ["hearthstone", "ironwood"],
  2: ["hearthstone", "ironwood", "emberDust"],
  3: ["hearthstone", "ironwood", "emberDust", "curedLeather"],
  4: ["hearthstone", "ironwood", "emberDust", "curedLeather", "wovenCord"],
};

var LOCATIONS = [
  { name: "Hollow Oak", icon: "\u{1F333}", scene: "forest", desc: "An ancient tree split by lightning" },
  { name: "Creek Bed", icon: "\u{1F4A7}", scene: "water", desc: "Smooth stones in a shallow stream" },
  { name: "Stone Ruins", icon: "\u{1F3DB}\uFE0F", scene: "ruins", desc: "Weathered walls, forgotten time" },
  { name: "Cave Mouth", icon: "\u{1F573}\uFE0F", scene: "cave", desc: "A dark opening, cool and sharp" },
  { name: "Burned Clearing", icon: "\u{1F525}", scene: "fire", desc: "Charred stumps in a circle" },
  { name: "Ridge Overlook", icon: "\u26F0\uFE0F", scene: "mountain", desc: "Windswept ridge above the valley" },
  { name: "Moss Bank", icon: "\u{1F33F}", scene: "moss", desc: "Thick emerald carpet, fallen log" },
  { name: "Fallen Tower", icon: "\u{1F5FC}", scene: "tower", desc: "Crumbled stone stacked impossibly" },
  { name: "Iron Vein", icon: "\u2692\uFE0F", scene: "mineral", desc: "Dark ore glinting through rock" },
  { name: "Ancient Well", icon: "\u{1FAA8}", scene: "well", desc: "Fitted stones, a dark shaft" },
  { name: "Bramble Thicket", icon: "\u{1F339}", scene: "bramble", desc: "Something gleaming deeper inside" },
  { name: "Windswept Bluff", icon: "\u{1F32C}\uFE0F", scene: "wind", desc: "Exposed cliff, wind never stops" },
  { name: "Sunken Garden", icon: "\u{1F338}", scene: "garden", desc: "Wildflowers in strange patterns" },
  { name: "Ember Pool", icon: "\u2668\uFE0F", scene: "thermal", desc: "Warm water bubbling, steam rising" },
];

var SCENES = {
  forest: "linear-gradient(170deg, #1a3520 0%, #2a4a2a 40%, #1a3018 100%)",
  water: "linear-gradient(170deg, #152a3a 0%, #254a6a 40%, #152838 100%)",
  ruins: "linear-gradient(170deg, #2a2520 0%, #3e3830 40%, #2a2218 100%)",
  cave: "linear-gradient(170deg, #181828 0%, #252540 40%, #181828 100%)",
  fire: "linear-gradient(170deg, #2a1508 0%, #4a2a10 40%, #2a1808 100%)",
  mountain: "linear-gradient(170deg, #2a3548 0%, #3a4a60 40%, #2a3548 100%)",
  moss: "linear-gradient(170deg, #1a3018 0%, #2a4a22 40%, #1a3018 100%)",
  tower: "linear-gradient(170deg, #252030 0%, #38304a 40%, #201a2a 100%)",
  mineral: "linear-gradient(170deg, #1a1a30 0%, #2a2a45 40%, #1a1a30 100%)",
  well: "linear-gradient(170deg, #182028 0%, #253038 40%, #151a22 100%)",
  bramble: "linear-gradient(170deg, #301818 0%, #452218 40%, #301010 100%)",
  wind: "linear-gradient(170deg, #283038 0%, #3a4a58 40%, #252a32 100%)",
  garden: "linear-gradient(170deg, #1a2818 0%, #2a3a22 40%, #142010 100%)",
  thermal: "linear-gradient(170deg, #302015 0%, #452a18 40%, #281510 100%)",
};

var C = {
  bg: "#0E0C0A", surface: "#1A1410", surfaceLight: "#241E18",
  amber: "#D4943A", gold: "#C8A96E", warmGray: "#6B6560",
  text: "#E8E0D8", textDim: "#8B8580", border: "#2A2420",
};

// Parchment palette
var P = {
  bg: "linear-gradient(170deg, #F0E4D0 0%, #E4D4B8 30%, #D8C8A8 70%, #D0BC98 100%)",
  border: "#C8AC80",
  textDark: "#4A3A28",
  textMid: "#6B5840",
  textLight: "#8B7558",
  sealBg: "radial-gradient(circle at 40% 35%, #B83020 0%, #7A1818 70%, #501010 100%)",
  sealBorder: "#6A1515",
  sealText: "#E8C8A0",
};

function rollRarity() {
  var r = Math.random(), c = 0;
  var entries = Object.entries(RARITY);
  for (var i = 0; i < entries.length; i++) { c += entries[i][1].chance; if (r <= c) return entries[i][0]; }
  return "common";
}

function rollReward(level, bonus) {
  if (!bonus && Math.random() < 0.30) {
    var p = PROVISIONS[Math.floor(Math.random() * PROVISIONS.length)];
    return { type: "provision", item: p, sortVal: p.sortVal };
  }
  var rarity = rollRarity();
  var mats = LEVEL_MATS[Math.min(level, 4)];
  var mat = mats[Math.floor(Math.random() * mats.length)];
  return { type: rarity === "wildcard" ? "wildcard" : "material", material: mat, rarity: rarity, units: RARITY[rarity].units, sortVal: RARITY[rarity].sortVal };
}

function shuffleArr(a) {
  var b = a.slice();
  for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
  return b;
}

// ─── Sealed Card (parchment) ───
function SealedCard(props) {
  var loc = props.loc, selected = props.selected, selectable = props.selectable;
  var onClick = props.onClick, dealt = props.dealt, idx = props.idx;
  var cardRef = useRef(null);

  var borderColor = selected ? C.amber : P.border;
  var shadow = selected ? "0 0 28px " + C.amber + "50" : "0 3px 14px rgba(0,0,0,0.4)";

  return (
    <div
      ref={cardRef}
      onClick={selectable ? onClick : undefined}
      onMouseEnter={function() {
        if (selectable && cardRef.current) {
          cardRef.current.style.transform = "translateY(-8px) scale(1.05)";
          cardRef.current.style.borderColor = C.amber;
          cardRef.current.style.boxShadow = "0 12px 32px " + C.amber + "40";
        }
      }}
      onMouseLeave={function() {
        if (selectable && cardRef.current) {
          cardRef.current.style.transform = "translateY(0) scale(1)";
          cardRef.current.style.borderColor = selected ? C.amber : P.border;
          cardRef.current.style.boxShadow = selected ? "0 0 28px " + C.amber + "50" : "0 3px 14px rgba(0,0,0,0.4)";
        }
      }}
      style={{
        width: 130, height: 210, borderRadius: 12,
        background: P.bg,
        border: "2px solid " + borderColor,
        cursor: selectable ? "pointer" : "default",
        opacity: dealt ? 1 : 0,
        transform: dealt ? "translateY(0) scale(1)" : "translateY(30px) scale(0.85)",
        transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1) " + (idx * 0.1) + "s",
        display: "flex", flexDirection: "column", alignItems: "center",
        position: "relative", overflow: "hidden",
        boxShadow: shadow,
      }}
    >
      {/* Parchment texture overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, #8B6914 8px, #8B6914 9px)",
      }} />

      {/* Location icon + name */}
      <div style={{ paddingTop: 14, textAlign: "center", position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: 30, display: "block", lineHeight: 1 }}>{loc.icon}</span>
        <div style={{
          fontSize: 12, fontWeight: 700, marginTop: 6, color: P.textDark,
          fontFamily: "'Georgia', serif",
        }}>{loc.name}</div>
        <div style={{
          fontSize: 8, color: P.textLight, marginTop: 2, lineHeight: 1.3,
          padding: "0 8px", fontStyle: "italic",
        }}>{loc.desc}</div>
      </div>

      {/* Wax seal */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: P.sealBg, border: "2px solid " + P.sealBorder,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35), inset 0 1px 2px rgba(255,255,255,0.15)",
        }}>
          <span style={{ fontSize: 16, color: P.sealText, fontFamily: "'Georgia', serif", fontWeight: 700 }}>?</span>
        </div>
        <div style={{
          marginTop: 5, fontSize: 7, letterSpacing: 2, textTransform: "uppercase",
          color: P.textMid, fontWeight: 600,
        }}>Sealed</div>
      </div>

      {/* Selected badge */}
      {selected && (
        <div style={{
          position: "absolute", top: 5, right: 5, zIndex: 6,
          background: C.amber, borderRadius: "50%",
          width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, color: "#fff", fontWeight: 700,
          animation: "pulse 1.5s ease-in-out infinite",
        }}>{"\u2713"}</div>
      )}
    </div>
  );
}

// ─── Revealed Card (dark scene, rarity-tinted) ───
function RevealedCard(props) {
  var loc = props.loc, reward = props.reward, isChosen = props.isChosen, dimmed = props.dimmed;
  var dealt = props.dealt, idx = props.idx;
  var mat = reward && reward.material ? MATERIALS[reward.material] : null;
  var rar = reward && reward.rarity ? RARITY[reward.rarity] : null;
  var prov = reward && reward.type === "provision";

  // Rarity letter + color system
  var rarityKey = reward.rarity || "common";
  var RARITY_LETTERS = { common: "C", uncommon: "U", rare: "R", wildcard: "L" };
  var RARITY_BG_TINTS = {
    common: "rgba(120,115,110,0.12)",
    uncommon: "rgba(74,144,217,0.18)",
    rare: "rgba(155,89,182,0.22)",
    wildcard: "rgba(241,196,15,0.22)",
  };
  var RARITY_BORDER_TINTS = {
    common: C.border,
    uncommon: "rgba(74,144,217,0.5)",
    rare: "rgba(155,89,182,0.6)",
    wildcard: "rgba(241,196,15,0.6)",
  };
  var rarLetter = RARITY_LETTERS[rarityKey] || "C";
  var rarLetterColor = rar ? rar.color : "#8B8680";
  var bgTint = RARITY_BG_TINTS[rarityKey] || RARITY_BG_TINTS.common;
  var borderTint = RARITY_BORDER_TINTS[rarityKey] || C.border;

  var borderColor = isChosen ? C.amber : (prov ? C.border : borderTint);

  var shadow = "0 3px 14px rgba(0,0,0,0.5)";
  if (isChosen) shadow = "0 0 40px " + C.amber + "60";
  else if (rarityKey === "rare") shadow = "0 0 28px rgba(155,89,182,0.5)";
  else if (rarityKey === "wildcard") shadow = "0 0 32px rgba(241,196,15,0.5)";

  // Show badge only for Rare and Legendary
  var showBadge = rarityKey === "rare" || rarityKey === "wildcard";

  return (
    <div style={{
      width: 130, height: 210, borderRadius: 12,
      background: SCENES[loc.scene],
      border: "2px solid " + borderColor,
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
      boxShadow: shadow,
      filter: dimmed ? "brightness(0.4) saturate(0.4)" : "none",
      animation: "cardReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
      transition: "filter 0.4s ease",
    }}>
      {/* Rarity tint overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: bgTint,
      }} />

      {/* Flash */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none",
        background: isChosen
          ? "radial-gradient(ellipse at 50% 50%, rgba(212,148,58,0.5) 0%, transparent 70%)"
          : "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)",
        animation: "flashReveal 1s ease-out forwards",
      }} />

      {/* Location header */}
      <div style={{ padding: "10px 8px 4px", textAlign: "center", position: "relative", zIndex: 3 }}>
        <span style={{ fontSize: 24, display: "block", lineHeight: 1 }}>{loc.icon}</span>
        <div style={{
          fontSize: 11, fontWeight: 700, marginTop: 3, color: "#fff",
          fontFamily: "'Georgia', serif", textShadow: "0 1px 6px rgba(0,0,0,0.9)",
        }}>{loc.name}</div>
      </div>

      {/* Reward */}
      <div style={{
        flex: 1, margin: "2px 6px 6px", borderRadius: 8,
        background: isChosen
          ? "linear-gradient(180deg, rgba(212,148,58,0.18) 0%, rgba(212,148,58,0.06) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        border: isChosen ? ("1px solid " + C.amber + "40") : "1px solid rgba(255,255,255,0.1)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "4px", position: "relative", zIndex: 3,
      }}>
        {prov ? (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 26, display: "block" }}>{reward.item.icon}</span>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#5DBE6B", marginTop: 3, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{reward.item.name}</div>
            <div style={{ fontSize: 9, color: "#bbb" }}>{reward.item.value}</div>
          </div>
        ) : reward.type === "wildcard" ? (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 30, display: "block", animation: "pulse 2s ease-in-out infinite" }}>{"\u2728"}</span>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#F1C40F", marginTop: 3, textShadow: "0 0 8px rgba(241,196,15,0.5)" }}>Strange Essence</div>
            <div style={{ fontSize: 8, color: "#F1C40F", marginTop: 2, opacity: 0.8, fontStyle: "italic" }}>Choose its form...</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 26, display: "block" }}>{mat ? mat.icon : ""}</span>
            <div style={{ fontSize: 10, fontWeight: 700, color: mat ? mat.color : "#fff", marginTop: 3, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
              {mat ? mat.name : ""}{!showBadge && rar ? (" \u00D7 " + rar.units) : ""}
            </div>
            {showBadge && rar && (
              <div style={{
                display: "inline-block", fontSize: 8, color: rar.color, marginTop: 3,
                padding: "2px 7px", borderRadius: 8,
                border: "1px solid " + rar.color + "60", background: rar.color + "25",
                fontWeight: 700,
              }}>
                {rar.name + " \u00D7 " + rar.units}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rarity letter - bottom right corner */}
      {!prov && (
        <div style={{
          position: "absolute", bottom: 6, right: 8, zIndex: 6,
          fontSize: 14, fontWeight: 800, color: rarLetterColor,
          opacity: 0.7, fontFamily: "'Georgia', serif",
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          lineHeight: 1,
        }}>{rarLetter}</div>
      )}

      {/* Chosen badge */}
      {isChosen && (
        <div style={{
          position: "absolute", top: 5, right: 5, zIndex: 6,
          background: C.amber, borderRadius: "50%",
          width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, color: "#fff", fontWeight: 700, boxShadow: "0 0 14px " + C.amber,
        }}>{"\u2713"}</div>
      )}
    </div>
  );
}

// ─── Card Wrapper (switches between sealed and revealed) ───
function CardSlot(props) {
  var loc = props.loc, reward = props.reward, isRevealed = props.isRevealed;
  var isChosen = props.isChosen, dimmed = props.dimmed, selected = props.selected;
  var selectable = props.selectable, onClick = props.onClick, dealt = props.dealt, idx = props.idx;

  if (isRevealed) {
    return <RevealedCard loc={loc} reward={reward} isChosen={isChosen} dimmed={dimmed} dealt={dealt} idx={idx} />;
  }
  return <SealedCard loc={loc} selected={selected} selectable={selectable} onClick={onClick} dealt={dealt} idx={idx} />;
}

// ─── Inventory Modal ───
function InvModal(props) {
  var inv = props.inv, onClose = props.onClose;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }} onClick={onClose}>
      <div style={{ background: C.surface, borderRadius: 16, border: "1px solid " + C.border, padding: "24px 28px", maxWidth: 440, width: "92%", maxHeight: "85vh", overflowY: "auto" }} onClick={function(e) { e.stopPropagation(); }}>
        <h2 style={{ fontSize: 20, margin: "0 0 3px", color: C.text, fontFamily: "'Georgia', serif" }}>Materials Inventory</h2>
        <p style={{ color: C.textDim, fontSize: 11, margin: "0 0 16px" }}>Collected from foraging expeditions</p>
        {Object.entries(MATERIALS).map(function(entry) {
          var k = entry[0], m = entry[1];
          return (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid " + C.border }}>
              <span style={{ fontSize: 18 }}>{m.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: m.color, fontFamily: "'Georgia', serif" }}>{m.name}</div>
                <div style={{ fontSize: 9, color: C.textDim }}>{m.theme}</div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: C.text, minWidth: 36, textAlign: "right", fontFamily: "'Georgia', serif" }}>{inv[k] || 0}</div>
            </div>
          );
        })}
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid " + C.border, display: "flex", gap: 20 }}>
          {[{ icon: "\u26FD", k: "gasCoins", label: "Gas Coins" }, { icon: "\u{1F36B}", k: "snackTokens", label: "Snack Tokens" }, { icon: "\u{1F3AE}", k: "gameCredits", label: "Game Credits" }].map(function(p) {
            return (
              <div key={p.k} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 15 }}>{p.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: "'Georgia', serif" }}>{inv[p.k] || 0}</div>
                <div style={{ fontSize: 8, color: C.textDim }}>{p.label}</div>
              </div>
            );
          })}
        </div>
        <button onClick={onClose} style={{ marginTop: 16, width: "100%", padding: 10, background: C.surfaceLight, border: "1px solid " + C.border, borderRadius: 8, color: C.text, fontSize: 12, cursor: "pointer", fontFamily: "'Georgia', serif" }}>Close</button>
      </div>
    </div>
  );
}

// ─── Wildcard Picker ───
function WCPicker(props) {
  var mats = props.mats, onPick = props.onPick;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
      <div style={{ background: C.surface, borderRadius: 16, border: "2px solid #F1C40F", padding: 28, maxWidth: 380, width: "90%", boxShadow: "0 0 50px rgba(241,196,15,0.2)" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <span style={{ fontSize: 36 }}>{"\u2728"}</span>
          <h2 style={{ fontSize: 20, color: "#F1C40F", margin: "6px 0 2px", fontFamily: "'Georgia', serif" }}>Legendary!</h2>
          <p style={{ color: C.textDim, fontSize: 12, margin: 0 }}>Choose which material it becomes ({"\u00D7"}3 units)</p>
        </div>
        {mats.map(function(k) {
          var m = MATERIALS[k];
          return (
            <button key={k} onClick={function() { onPick(k); }} style={{
              display: "flex", alignItems: "center", gap: 10, width: "100%",
              padding: "10px 14px", background: C.surfaceLight,
              border: "1px solid " + C.border, borderRadius: 10,
              cursor: "pointer", color: C.text, marginBottom: 6,
              fontFamily: "'Georgia', serif", transition: "all 0.2s",
            }}
            onMouseEnter={function(e) { e.currentTarget.style.borderColor = m.color; e.currentTarget.style.background = m.color + "18"; }}
            onMouseLeave={function(e) { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surfaceLight; }}
            >
              <span style={{ fontSize: 20 }}>{m.icon}</span>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: m.color }}>{m.name}</div>
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

function RevealCounter(props) {
  var current = props.current, total = props.total;
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 8 }}>
      {Array.from({ length: total }, function(_, i) {
        var filled = i < current;
        var isLast = i === total - 1;
        return (
          <div key={i} style={{
            width: isLast ? 10 : 7, height: isLast ? 10 : 7, borderRadius: "50%",
            background: filled ? (isLast ? C.amber : C.warmGray) : C.border,
            transition: "all 0.3s",
            boxShadow: filled && isLast ? "0 0 8px " + C.amber + "60" : "none",
            border: isLast ? "1px solid " + C.amber + "60" : "none",
          }} />
        );
      })}
    </div>
  );
}

// ═══════ MAIN ═══════
export default function HearthfireForaging() {
  var _s = useState("setup"); var phase = _s[0]; var setPhase = _s[1];
  var _l = useState(1); var level = _l[0]; var setLevel = _l[1];
  var _f = useState("standard"); var fType = _f[0]; var setFType = _f[1];
  var _c = useState([]); var cards = _c[0]; var setCards = _c[1];
  var _ch = useState(null); var chosen = _ch[0]; var setChosen = _ch[1];
  var _d = useState(false); var dealt = _d[0]; var setDealt = _d[1];
  var _rv = useState([]); var revealedIndices = _rv[0]; var setRevealedIndices = _rv[1];
  var _inv = useState({}); var inv = _inv[0]; var setInv = _inv[1];
  var _si = useState(false); var showInv = _si[0]; var setShowInv = _si[1];
  var _sw = useState(false); var showWC = _sw[0]; var setShowWC = _sw[1];
  var _h = useState([]); var hist = _h[0]; var setHist = _h[1];
  var _rdy = useState(false); var ready = _rdy[0]; var setReady = _rdy[1];
  var _dbg = useState(false); var debugMode = _dbg[0]; var setDebugMode = _dbg[1];

  useEffect(function() {
    (async function() {
      try { var r = await window.storage.get("hf-inv"); if (r && r.value) setInv(JSON.parse(r.value)); } catch(e) {}
      try { var r2 = await window.storage.get("hf-hist"); if (r2 && r2.value) setHist(JSON.parse(r2.value)); } catch(e) {}
      setReady(true);
    })();
  }, []);

  var save = useCallback(async function(newInv, newHist) {
    if (newInv !== undefined) { setInv(newInv); try { await window.storage.set("hf-inv", JSON.stringify(newInv)); } catch(e) {} }
    if (newHist !== undefined) { setHist(newHist); try { await window.storage.set("hf-hist", JSON.stringify(newHist)); } catch(e) {} }
  }, []);

  function startForage() {
    var locs = shuffleArr(LOCATIONS).slice(0, 7);
    var bonus = fType === "bonus";
    var c = locs.map(function(l) {
      if (debugMode) {
        var mats = LEVEL_MATS[Math.min(level, 4)];
        var mat = mats[Math.floor(Math.random() * mats.length)];
        return { location: l, reward: { type: "wildcard", material: mat, rarity: "wildcard", units: 0, sortVal: 100 } };
      }
      return { location: l, reward: rollReward(level, bonus) };
    });
    setCards(c); setChosen(null); setRevealedIndices([]); setDealt(false);
    setPhase("selecting");
    setTimeout(function() { setDealt(true); }, 80);
  }

  function pick(i) { if (phase !== "selecting") return; setChosen(i); setPhase("confirming"); }

  function confirmChoice() {
    var others = [];
    for (var i = 0; i < cards.length; i++) {
      if (i !== chosen) others.push({ idx: i, val: cards[i].reward.sortVal || 0 });
    }
    others.sort(function(a, b) { return a.val - b.val; });
    var order = others.map(function(o) { return o.idx; });
    order.push(chosen);
    setRevealedIndices([]); setPhase("revealing");
    var delay = 800;
    order.forEach(function(cardIdx, step) {
      setTimeout(function() {
        setRevealedIndices(function(prev) { return prev.concat([cardIdx]); });
        if (step === order.length - 1) {
          setTimeout(function() {
            var rw = cards[chosen].reward;
            if (rw.type === "wildcard") setShowWC(true);
            else applyReward(rw, cards[chosen].location.name);
            setPhase("result");
          }, 800);
        }
      }, delay * (step + 1));
    });
  }

  function cancelChoice() { setChosen(null); setPhase("selecting"); }

  function applyReward(rw, locName) {
    var ni = Object.assign({}, inv);
    if (rw.type === "provision") {
      var p = rw.item;
      if (p.name === "Gas Coin") ni.gasCoins = (ni.gasCoins || 0) + 1;
      else if (p.name === "Snack Token") ni.snackTokens = (ni.snackTokens || 0) + 1;
      else if (p.name === "Game Credit") ni.gameCredits = (ni.gameCredits || 0) + 1;
    } else {
      ni[rw.material] = (ni[rw.material] || 0) + (rw.units || 3);
    }
    var entry = {
      d: new Date().toISOString(), loc: locName || "?", type: fType,
      rw: rw.type === "provision" ? (rw.item.name + " (" + rw.item.value + ")")
        : ((MATERIALS[rw.material] ? MATERIALS[rw.material].name : "?") + " x" + (rw.units || 3) + " (" + (RARITY[rw.rarity] ? RARITY[rw.rarity].name : "?") + ")"),
    };
    save(ni, [entry].concat(hist).slice(0, 40));
  }

  function wcPick(k) {
    applyReward({ type: "material", material: k, rarity: "wildcard", units: 3 }, cards[chosen] ? cards[chosen].location.name : "?");
    setShowWC(false);
  }

  function reset() { setPhase("setup"); setCards([]); setChosen(null); setDealt(false); setRevealedIndices([]); }

  if (!ready) return null;

  var chosenReward = chosen !== null && cards[chosen] ? cards[chosen].reward : null;
  var chosenMat = chosenReward && chosenReward.material ? MATERIALS[chosenReward.material] : null;
  var chosenRar = chosenReward && chosenReward.rarity ? RARITY[chosenReward.rarity] : null;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column" }}>
      <div style={{
        padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "linear-gradient(180deg, " + C.surface + " 0%, " + C.bg + " 100%)",
        borderBottom: "1px solid " + C.border,
      }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, color: C.amber, textTransform: "uppercase" }}>HEARTHFIRE</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>The Wilds</div>
        </div>
        <button onClick={function() { setShowInv(true); }} style={{
          background: C.surfaceLight, border: "1px solid " + C.border, borderRadius: 8,
          padding: "6px 14px", color: C.text, fontSize: 11, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 5, fontFamily: "'Georgia', serif",
        }}>{"\u{1F392}"} Inventory</button>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}>

        {phase === "setup" && (
          <div style={{ textAlign: "center", maxWidth: 380 }}>
            <div style={{
              width: 70, height: 70, borderRadius: "50%", margin: "0 auto 16px",
              background: "radial-gradient(circle, " + C.amber + "25 0%, transparent 70%)",
              border: "2px solid " + C.amber + "35", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 34,
            }}>{"\u{1F5FA}\uFE0F"}</div>
            <h2 style={{ fontSize: 22, margin: "0 0 6px" }}>Foraging Expedition</h2>
            <p style={{ color: C.textDim, fontSize: 12, margin: "0 0 24px", lineHeight: 1.6 }}>
              Scout seven sealed locations. Read the terrain. Choose where to break the seal.
            </p>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, color: C.warmGray, marginBottom: 5 }}>Explorer Level</div>
              <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
                {[1, 2, 3, 4].map(function(l) {
                  return (<button key={l} onClick={function() { setLevel(l); }} style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: level === l ? C.amber : C.surfaceLight,
                    border: "1px solid " + (level === l ? C.amber : C.border),
                    color: level === l ? "#fff" : C.textDim,
                    fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Georgia', serif",
                  }}>{l}</button>);
                })}
              </div>
              <div style={{ fontSize: 9, color: C.textDim, marginTop: 4 }}>
                {LEVEL_MATS[level].map(function(k) { return MATERIALS[k].icon + " " + MATERIALS[k].name; }).join("  ")}
              </div>
            </div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 10, color: C.warmGray, marginBottom: 5 }}>Forage Type</div>
              <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
                {[{ k: "standard", l: "Standard", d: "Daily check-in" }, { k: "bonus", l: "Bonus", d: "Quest completion" }].map(function(t) {
                  return (<button key={t.k} onClick={function() { setFType(t.k); }} style={{
                    padding: "8px 18px", borderRadius: 8,
                    background: fType === t.k ? (C.amber + "18") : C.surfaceLight,
                    border: "1px solid " + (fType === t.k ? C.amber : C.border),
                    color: fType === t.k ? C.amber : C.textDim, cursor: "pointer", fontFamily: "'Georgia', serif",
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{t.l}</div>
                    <div style={{ fontSize: 9, opacity: 0.7 }}>{t.d}</div>
                  </button>);
                })}
              </div>
              {fType === "bonus" && <div style={{ fontSize: 9, color: C.amber, marginTop: 4, opacity: 0.8 }}>Bonus forages yield materials only</div>}
            </div>
            <button onClick={startForage} style={{
              padding: "12px 42px", borderRadius: 10,
              background: "linear-gradient(135deg, " + C.amber + " 0%, #B87D2A 100%)",
              border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 4px 20px " + C.amber + "40", fontFamily: "'Georgia', serif",
            }}>Enter the Wilds</button>

            <div style={{ marginTop: 12 }}>
              <button onClick={function() { setDebugMode(!debugMode); }} style={{
                padding: "4px 12px", borderRadius: 6, fontSize: 9,
                background: debugMode ? "#F1C40F20" : "transparent",
                border: "1px solid " + (debugMode ? "#F1C40F50" : C.border),
                color: debugMode ? "#F1C40F" : C.textDim,
                cursor: "pointer", fontFamily: "'Georgia', serif",
                opacity: 0.6,
              }}>{debugMode ? "\u2728 Legendary Test Mode ON" : "\u{1F527} Test Mode"}</button>
            </div>

            {hist.length > 0 && (
              <div style={{ marginTop: 24, textAlign: "left" }}>
                <div style={{ fontSize: 9, color: C.warmGray, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Recent Forages</div>
                {hist.slice(0, 3).map(function(h, i) {
                  return (<div key={i} style={{ padding: "6px 10px", marginBottom: 3, background: C.surfaceLight, borderRadius: 6, fontSize: 10, color: C.textDim, border: "1px solid " + C.border }}>
                    <span style={{ color: C.warmGray }}>{new Date(h.d).toLocaleDateString()} — {h.loc}</span>
                    <span style={{ color: C.text, marginLeft: 6 }}>{h.rw}</span>
                  </div>);
                })}
              </div>
            )}
          </div>
        )}

        {phase !== "setup" && (
          <div style={{ textAlign: "center", width: "100%" }}>
            <div style={{ marginBottom: 10, minHeight: 48 }}>
              {phase === "selecting" && (
                <div>
                  <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 3 }}>Scout the terrain</div>
                  <div style={{ color: C.textDim, fontSize: 11 }}>Each location hides a sealed find. Choose where to break the seal.</div>
                </div>
              )}
              {phase === "confirming" && chosen !== null && cards[chosen] && (
                <div>
                  <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Search {cards[chosen].location.name}?</div>
                  <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                    <button onClick={confirmChoice} style={{
                      padding: "8px 24px", borderRadius: 8, background: C.amber, border: "none",
                      color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Georgia', serif",
                    }}>Break the Seal</button>
                    <button onClick={cancelChoice} style={{
                      padding: "8px 20px", borderRadius: 8, background: "transparent",
                      border: "1px solid " + C.border, color: C.textDim, fontSize: 12,
                      cursor: "pointer", fontFamily: "'Georgia', serif",
                    }}>Pick Again</button>
                  </div>
                </div>
              )}
              {phase === "revealing" && (
                <div>
                  <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
                    {revealedIndices.length < cards.length - 1 ? "Breaking seals..." : "Your find..."}
                  </div>
                  <RevealCounter current={revealedIndices.length} total={cards.length} />
                </div>
              )}
              {phase === "result" && (
                <div>
                  <div style={{ color: C.amber, fontSize: 16, fontWeight: 600, marginBottom: 2 }}>Expedition Complete</div>
                  {chosen !== null && cards[chosen] && <div style={{ color: C.textDim, fontSize: 11 }}>You searched {cards[chosen].location.name}</div>}
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", maxWidth: 620, margin: "0 auto" }}>
              {cards.map(function(c, i) {
                var isRevealed = revealedIndices.indexOf(i) !== -1;
                var isChosen = i === chosen;
                var dimmed = (phase === "result" || phase === "revealing") && isRevealed && !isChosen;
                return (
                  <CardSlot key={i} idx={i} loc={c.location} dealt={dealt}
                    selectable={phase === "selecting"}
                    selected={isChosen && (phase === "confirming")}
                    onClick={function() { pick(i); }}
                    reward={c.reward}
                    isRevealed={isRevealed}
                    isChosen={isChosen} dimmed={dimmed} />
                );
              })}
            </div>

            {phase === "result" && chosen !== null && !showWC && chosenReward && (
              <div style={{ marginTop: 24, animation: "fadeUp 0.5s ease both" }}>
                <div style={{
                  display: "inline-block", background: C.surfaceLight,
                  border: "2px solid " + C.amber, borderRadius: 12, padding: "14px 28px",
                  boxShadow: "0 0 30px " + C.amber + "25",
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
                      <div style={{ fontSize: 10, color: "#F1C40F", opacity: 0.8 }}>Legendary find — choose its form</div>
                    </div>
                  ) : (
                    <div>
                      <span style={{ fontSize: 26 }}>{chosenMat ? chosenMat.icon : ""}</span>
                      <div style={{ fontSize: 14, fontWeight: 600, color: chosenMat ? chosenMat.color : "#fff", marginTop: 3 }}>
                        {chosenMat ? chosenMat.name : ""} {"\u00D7"} {chosenReward.units || 3}
                      </div>
                      <div style={{ fontSize: 10, color: chosenRar ? chosenRar.color : "#fff" }}>{chosenRar ? chosenRar.name : ""} find</div>
                    </div>
                  )}
                  <div style={{ fontSize: 9, color: C.warmGray, marginTop: 6, borderTop: "1px solid " + C.border, paddingTop: 6 }}>Added to inventory</div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <button onClick={reset} style={{
                    padding: "10px 32px", borderRadius: 8, background: C.surfaceLight,
                    border: "1px solid " + C.amber, color: C.amber, fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "'Georgia', serif",
                  }}>Return to Camp</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showInv && <InvModal inv={inv} onClose={function() { setShowInv(false); }} />}
      {showWC && <WCPicker mats={LEVEL_MATS[Math.min(level, 4)]} onPick={wcPick} />}

      <style>{"\
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }\
        @keyframes cardReveal { from { opacity:0; transform:scale(0.85) rotateY(90deg); } 50% { opacity:1; transform:scale(1.05) rotateY(0deg); } to { transform:scale(1) rotateY(0deg); } }\
        @keyframes flashReveal { 0% { opacity:1; } 100% { opacity:0; } }\
        @keyframes pulse { 0%,100% { box-shadow: 0 0 12px rgba(212,148,58,0.5); } 50% { box-shadow: 0 0 24px rgba(212,148,58,0.8); } }\
        * { box-sizing:border-box; margin:0; padding:0; }\
        button { font-family:'Georgia',serif; }\
      "}</style>
    </div>
  );
}