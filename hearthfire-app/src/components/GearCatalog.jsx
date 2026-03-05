import { useState, useEffect } from 'react';
import { GEAR_CATALOG, MATERIALS } from '../constants';
import { getInventory, getCraftedGear, craftGear } from '../storage';
import { getLevelInfo } from '../game-logic';
import { getPlayerProfile } from '../storage';
import PageBanner from './PageBanner';

export default function GearCatalog() {
  const [inv, setInv] = useState({});
  const [crafted, setCrafted] = useState([]);
  const [activeCategory, setActiveCategory] = useState('hearth');

  useEffect(() => {
    setInv(getInventory());
    setCrafted(getCraftedGear());
  }, []);

  const profile = getPlayerProfile();
  const levelInfo = getLevelInfo(profile.totalXP);
  const categories = Object.entries(GEAR_CATALOG);
  const cat = GEAR_CATALOG[activeCategory];
  const mat = MATERIALS[cat.material];
  const currentQty = inv[cat.material] || 0;
  const craftedKeys = new Set(crafted.map(c => c.gearKey));

  const handleCraft = (item) => {
    const result = craftGear(item.key, cat.material, item.cost);
    if (result) {
      setInv(getInventory());
      setCrafted(getCraftedGear());
    }
  };

  return (
    <div>
      <PageBanner image="gear.png" height="28vh" position="center 20%" filter="brightness(1.2) contrast(1.15) saturate(1.3)">
        <div className="page-header-brand">HEARTHFIRE</div>
        <div className="page-header-title">Gear Catalog</div>
      </PageBanner>

      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: 4, padding: '12px 16px', overflowX: 'auto' }}>
        {categories.map(([key, c]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            style={{
              padding: '8px 14px', borderRadius: 8, border: 'none',
              background: activeCategory === key ? 'var(--surface-light)' : 'transparent',
              color: activeCategory === key ? MATERIALS[c.material].color : 'var(--text-dim)',
              fontSize: 11, fontWeight: 600, fontFamily: "'Cinzel', 'Georgia', serif",
              cursor: 'pointer', whiteSpace: 'nowrap',
              borderBottom: activeCategory === key ? `2px solid ${MATERIALS[c.material].color}` : '2px solid transparent',
            }}
          >
            {MATERIALS[c.material].icon} {c.title.split(' ')[0]}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* Category Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 28 }}>{mat.icon}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: mat.color }}>{cat.title}</div>
            <div className="text-xs text-dim">{cat.subtitle} — Material: {mat.name}</div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: mat.color }}>{currentQty}</div>
            <div className="text-xs text-dim">in stock</div>
          </div>
        </div>

        {/* Gear Items */}
        {cat.items.map(item => {
          const isCrafted = craftedKeys.has(item.key);
          const canAfford = currentQty >= item.cost;
          const levelMet = levelInfo.level >= item.level;
          const canCraft = canAfford && levelMet && !isCrafted;
          const progress = Math.min(currentQty / item.cost, 1);

          return (
            <div key={item.key} style={{
              padding: '14px', marginBottom: 8,
              background: isCrafted ? 'rgba(76,175,80,0.06)' : 'var(--surface)',
              borderRadius: 10,
              border: `1px solid ${isCrafted ? 'rgba(76,175,80,0.3)' : 'var(--border)'}`,
              opacity: levelMet ? 1 : 0.5,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>
                    {isCrafted ? '\u2705 ' : ''}{item.name}
                  </div>
                  <div className="text-xs text-dim">
                    Level {item.level} · {item.price} · ~{item.estDays} days
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: canAfford ? 'var(--success)' : mat.color }}>
                    {currentQty}/{item.cost}
                  </div>
                  <div className="text-xs text-dim">{mat.icon} {mat.name}</div>
                </div>
              </div>
              {!isCrafted && (
                <div className="progress-bar" style={{ marginBottom: canCraft ? 8 : 0 }}>
                  <div className="progress-fill" style={{
                    width: `${Math.round(progress * 100)}%`,
                    background: canAfford ? 'var(--success)' : `linear-gradient(90deg, ${mat.color}, ${mat.color}88)`,
                  }} />
                </div>
              )}
              {canCraft && (
                <button onClick={() => handleCraft(item)} style={{
                  width: '100%', padding: '8px', borderRadius: 6,
                  background: 'rgba(76,175,80,0.15)', border: '1px solid rgba(76,175,80,0.3)',
                  color: 'var(--success)', fontSize: 12, fontWeight: 700,
                  fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
                }}>
                  {'\u2692\uFE0F'} Craft
                </button>
              )}
              {!levelMet && !isCrafted && (
                <div className="text-xs text-dim mt-8">{'\u2717'} Requires Level {item.level}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
