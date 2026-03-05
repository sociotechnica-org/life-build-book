import { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav';
import CheckinMorning from './components/CheckinMorning';
import CheckinEvening from './components/CheckinEvening';
import Foraging from './components/Foraging';
import Dashboard from './components/Dashboard';
import QuestBrowser from './components/QuestBrowser';
import Inventory from './components/Inventory';
import GearCatalog from './components/GearCatalog';
import Profile from './components/Profile';
import Auth from './components/Auth';
import AdminPanel from './components/AdminPanel';
import { getPlayerProfile, setAuthUser } from './storage';
import { supabase, supabaseEnabled } from './supabase';

export default function App() {
  const [user, setUser] = useState(null); // { id?, role, email?, displayName? }
  const [loading, setLoading] = useState(supabaseEnabled); // check existing session
  const [view, setView] = useState('home');
  const [forageContext, setForageContext] = useState(null);

  // On mount: restore session or pick up OAuth redirect tokens
  useEffect(() => {
    if (!supabaseEnabled || !supabase) {
      setLoading(false);
      return;
    }

    const setSession = async (session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles').select('role, display_name')
          .eq('id', session.user.id).single();
        const authUser = {
          id: session.user.id,
          role: profile?.role || 'player',
          email: session.user.email,
          displayName: profile?.display_name,
        };
        setAuthUser(authUser.id, authUser.role);
        setUser(authUser);
      }
      setLoading(false);
    };

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    // Listen for auth changes (OAuth redirect, sign-in, sign-out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuth = useCallback((authUser) => {
    setAuthUser(authUser.id || null, authUser.role);
    setUser(authUser);
  }, []);

  const handleLogout = useCallback(async () => {
    if (supabaseEnabled && supabase) {
      await supabase.auth.signOut();
    }
    setAuthUser(null, null);
    setUser(null);
    setView('home');
  }, []);

  // Loading session check (brief, only when Supabase is configured)
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0E0C0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--amber)', fontFamily: "'Cinzel', 'Georgia', serif", fontSize: 14 }}>Loading...</div>
      </div>
    );
  }

  // Not logged in → show auth splash
  if (!user) {
    return <Auth onAuth={handleAuth} />;
  }

  // Admin → show admin panel
  if (user.role === 'admin') {
    return <AdminPanel onLogout={handleLogout} />;
  }

  // Player experience
  return <PlayerApp
    view={view}
    setView={setView}
    forageContext={forageContext}
    setForageContext={setForageContext}
    onLogout={handleLogout}
  />;
}

function PlayerApp({ view, setView, forageContext, setForageContext, onLogout }) {
  const profile = getPlayerProfile();

  const handleNavigate = useCallback((v) => {
    setView(v);
    window.scrollTo(0, 0);
  }, [setView]);

  const handleForage = useCallback((type) => {
    setForageContext({ type, returnTo: view });
    setView('foraging');
  }, [view, setForageContext, setView]);

  const handleForageComplete = useCallback(() => {
    setView(forageContext?.returnTo || 'home');
    setForageContext(null);
  }, [forageContext, setView, setForageContext]);

  return (
    <div className="app-content">
      {view === 'home' && (
        <Dashboard onNavigate={handleNavigate} onForage={handleForage} />
      )}
      {view === 'profile' && (
        <Profile />
      )}
      {view === 'checkin-morning' && (
        <div>
          <div className="page-header">
            <div className="page-header-brand">HEARTHFIRE</div>
            <div className="page-header-title">{'\u16B2'} Dawn March</div>
          </div>
          <CheckinMorning onForage={handleForage} />
        </div>
      )}
      {view === 'checkin-evening' && (
        <div>
          <div className="page-header">
            <div className="page-header-brand">HEARTHFIRE</div>
            <div className="page-header-title">{'\u16D7'} Night Watch</div>
          </div>
          <CheckinEvening onForage={handleForage} />
        </div>
      )}
      {view === 'foraging' && (
        <Foraging
          type={forageContext?.type || 'standard'}
          level={profile.level}
          onComplete={handleForageComplete}
        />
      )}
      {view === 'quests' && (
        <QuestBrowser onForage={handleForage} />
      )}
      {view === 'quest-active' && (
        <QuestBrowser onForage={handleForage} initialView="active" />
      )}
      {view === 'inventory' && (
        <Inventory />
      )}
      {view === 'gear' && (
        <GearCatalog />
      )}

      {/* Logout button in header area */}
      {view === 'home' && (
        <button
          onClick={onLogout}
          style={{
            position: 'fixed', top: 12, right: 12, zIndex: 100,
            background: 'var(--surface-light)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '6px 12px',
            color: 'var(--text-dim)', fontSize: 11,
            fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer',
          }}
        >
          Log out
        </button>
      )}

      {view !== 'foraging' && (
        <Nav currentView={view} onNavigate={handleNavigate} />
      )}
    </div>
  );
}
