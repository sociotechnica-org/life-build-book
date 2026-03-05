const TABS = [
  { key: 'home',      icon: '\u16DF', label: 'Camp' },      // ᛟ Othala — homeland
  { key: 'quests',    icon: '\u16CF', label: 'Quests' },     // ᛏ Tiwaz — honor
  { key: 'inventory', icon: '\u16B1', label: 'Pack' },       // ᚱ Raido — journey
  { key: 'gear',      icon: '\u16A6', label: 'Gear' },       // ᚦ Thurisaz — forge
  { key: 'profile',   icon: '\u16D7', label: 'Profile' },    // ᛗ Mannaz — self
];

export default function Nav({ currentView, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.key}
          className={`nav-tab ${currentView === tab.key ? 'active' : ''}`}
          onClick={() => onNavigate(tab.key)}
        >
          <span className="nav-tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
