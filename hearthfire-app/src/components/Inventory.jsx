import { useState, useEffect } from 'react';
import { MATERIALS } from '../constants';
import { getInventory } from '../storage';
import PageBanner from './PageBanner';

const provisionItems = [
  { key: 'gasCoins', icon: '\u16B1', label: 'Gas Coins' },       // ᚱ Raido
  { key: 'snackTokens', icon: '\u16C3', label: 'Snack Tokens' },  // ᛃ Jera
  { key: 'gameCredits', icon: '\u16B7', label: 'Game Credits' },   // ᚷ Gebo
];

export default function Inventory() {
  const [inv, setInv] = useState({});

  useEffect(() => {
    setInv(getInventory());
  }, []);

  return (
    <div>
      <PageBanner image="pack.png" height="28vh" filter="brightness(1.2) contrast(1.15) saturate(1.3)">
        <div className="page-header-brand">HEARTHFIRE</div>
        <div className="page-header-title">Materials Pack</div>
      </PageBanner>

      <div style={{ padding: '0 16px' }}>
        {/* Materials */}
        <div className="section-label" style={{ paddingTop: 16 }}>Materials</div>
        {Object.entries(MATERIALS).map(([key, mat]) => {
          const qty = inv[key] || 0;
          return (
            <div key={key} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 0', borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: 24, color: mat.color, fontFamily: 'var(--font-heading)', width: 32, textAlign: 'center' }}>{mat.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: mat.color, fontFamily: 'var(--font-heading)' }}>{mat.name}</div>
                <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>{mat.theme}</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: qty > 0 ? 'var(--text)' : 'var(--text-dim)', minWidth: 40, textAlign: 'right', fontFamily: 'var(--font-heading)' }}>
                {qty}
              </div>
            </div>
          );
        })}

        {/* Provisions */}
        <div className="section-label" style={{ paddingTop: 20 }}>Provisions</div>
        <div style={{ display: 'flex', gap: 12, padding: '12px 0' }}>
          {provisionItems.map(p => (
            <div key={p.key} style={{
              flex: 1, textAlign: 'center', padding: '14px 8px',
              background: 'var(--surface)', borderRadius: 4,
              border: '1px solid var(--border)',
            }}>
              <div style={{ fontSize: 22, color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>{p.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, fontFamily: 'var(--font-heading)' }}>{inv[p.key] || 0}</div>
              <div style={{ fontSize: 9, color: 'var(--text-dim)', marginTop: 2, fontFamily: 'var(--font-heading)' }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
