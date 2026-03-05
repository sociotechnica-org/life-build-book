import { useState } from 'react';
import { supabase, supabaseEnabled } from '../supabase';

export default function Auth({ onAuth }) {
  const [showEmail, setShowEmail] = useState(false);
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('player');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      });
      if (oauthError) throw oauthError;
      // Redirect happens — App.jsx will pick up the session on return
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'signup') {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { role, display_name: displayName || 'Explorer' } },
        });
        if (signUpError) throw signUpError;
        if (data.user) onAuth({ id: data.user.id, role, email });
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        if (data.user) {
          const { data: profile } = await supabase
            .from('profiles').select('role, display_name')
            .eq('id', data.user.id).single();
          onAuth({
            id: data.user.id,
            role: profile?.role || 'player',
            email,
            displayName: profile?.display_name,
          });
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // ─── Offline mode ───
  if (!supabaseEnabled) {
    return (
      <Splash>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 16, letterSpacing: 0.5 }}>
          Offline Mode — data stored on this device
        </div>
        <button onClick={() => onAuth({ role: 'player' })} style={btnGold}>
          Begin Your Quest
        </button>
        <button onClick={() => onAuth({ role: 'admin' })} style={btnGhost}>
          Enter as Parent
        </button>
        <button
          onClick={() => { localStorage.clear(); window.location.reload(); }}
          style={{ ...btnLink, marginTop: 16, color: 'rgba(255,255,255,0.2)', fontSize: 11 }}
        >
          Reset all data
        </button>
      </Splash>
    );
  }

  // ─── Online (Supabase) mode ───
  return (
    <Splash>
      {!showEmail ? (
        <>
          <button onClick={handleGoogleSignIn} disabled={loading} style={btnGoogle}>
            <svg width="18" height="18" viewBox="0 0 24 24" style={{ marginRight: 10, flexShrink: 0 }}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? 'Connecting...' : 'Sign in with Google'}
          </button>

          <div style={dividerStyle}>
            <span style={{ background: 'transparent', padding: '0 12px', color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>or</span>
          </div>

          <button onClick={() => setShowEmail(true)} style={btnGhost}>
            Sign in with email
          </button>
        </>
      ) : (
        <>
          <form onSubmit={handleEmailSubmit}>
            {mode === 'signup' && (
              <>
                <input
                  type="text" value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  placeholder="Display name"
                  style={inputStyle}
                />
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                  <button type="button" onClick={() => setRole('player')}
                    style={role === 'player' ? pillActive : pillInactive}>
                    Player
                  </button>
                  <button type="button" onClick={() => setRole('admin')}
                    style={role === 'admin' ? { ...pillActive, borderColor: 'var(--night-glow)', color: 'var(--night-glow)', background: 'rgba(106,138,170,0.15)' } : pillInactive}>
                    Parent
                  </button>
                </div>
              </>
            )}
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Email" required style={inputStyle}
            />
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Password" required minLength={6} style={inputStyle}
            />
            {error && <div style={errorStyle}>{error}</div>}
            <button type="submit" disabled={loading} style={btnGold}>
              {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }}
            style={{ ...btnLink, marginTop: 10 }}
          >
            {mode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>

          <button onClick={() => { setShowEmail(false); setError(''); }} style={{ ...btnLink, marginTop: 4, color: 'rgba(255,255,255,0.35)' }}>
            Back
          </button>
        </>
      )}
    </Splash>
  );
}

// ─── Splash wrapper with cover art ───
function Splash({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0E0C0A',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Cover art — fills top portion */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '60vh',
        backgroundImage: 'url(/cover.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }} />

      {/* Gradient fade from art into dark */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, transparent 25%, rgba(14,12,10,0.6) 45%, #0E0C0A 60%)',
      }} />

      {/* Content anchored to bottom */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        marginTop: 'auto',
        padding: '0 28px 48px',
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── Styles ───

const btnGold = {
  width: '100%',
  padding: '15px 20px',
  marginBottom: 10,
  borderRadius: 12,
  background: 'linear-gradient(135deg, #D4943A 0%, #B87D2A 100%)',
  border: 'none',
  color: '#fff',
  fontSize: 16,
  fontWeight: 700,
  fontFamily: "'Cinzel', 'Georgia', serif",
  cursor: 'pointer',
  boxShadow: '0 4px 24px rgba(212,148,58,0.35)',
  letterSpacing: 0.5,
};

const btnGoogle = {
  width: '100%',
  padding: '14px 20px',
  marginBottom: 10,
  borderRadius: 12,
  background: '#fff',
  border: 'none',
  color: '#333',
  fontSize: 15,
  fontWeight: 600,
  fontFamily: "'Cinzel', 'Georgia', serif",
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
};

const btnGhost = {
  width: '100%',
  padding: '14px 20px',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'rgba(255,255,255,0.7)',
  fontSize: 14,
  fontFamily: "'Cinzel', 'Georgia', serif",
  cursor: 'pointer',
  marginBottom: 8,
};

const btnLink = {
  background: 'none',
  border: 'none',
  color: 'var(--amber)',
  fontSize: 13,
  cursor: 'pointer',
  fontFamily: "'Cinzel', 'Georgia', serif",
  textDecoration: 'underline',
  textAlign: 'center',
  width: '100%',
  padding: 4,
};

const inputStyle = {
  width: '100%',
  padding: '13px 14px',
  marginBottom: 10,
  borderRadius: 10,
  border: '1.5px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  fontFamily: "'Cinzel', 'Georgia', serif",
  fontSize: 14,
  boxSizing: 'border-box',
};

const pillActive = {
  flex: 1, padding: '11px', borderRadius: 8,
  background: 'rgba(212,148,58,0.12)',
  border: '1.5px solid var(--amber)',
  color: 'var(--amber)',
  fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer', fontSize: 13, fontWeight: 600,
};

const pillInactive = {
  flex: 1, padding: '11px', borderRadius: 8,
  background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(255,255,255,0.1)',
  color: 'rgba(255,255,255,0.4)',
  fontFamily: "'Cinzel', 'Georgia', serif", cursor: 'pointer', fontSize: 13, fontWeight: 600,
};

const dividerStyle = {
  textAlign: 'center',
  margin: '6px 0 12px',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  lineHeight: 0,
  paddingTop: 1,
};

const errorStyle = {
  padding: '10px 12px', borderRadius: 8,
  background: 'rgba(231,76,60,0.12)',
  border: '1px solid rgba(231,76,60,0.3)',
  color: '#e74c3c', fontSize: 12, marginBottom: 10,
};
