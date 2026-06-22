'use client';
import { useEffect, useState } from 'react';
import { PAPERS_DATA } from '@/lib/data';
import { Pomodoro } from './Pomodoro';

interface NavProps {
  view: string;
  activeSubject: string | null;
  onHome: () => void;
  onSubjectClick: (id: string) => void;
  onAnalytics: () => void;
  onStartPracticing: () => void;
}

export function Nav({ view, activeSubject, onHome, onSubjectClick, onAnalytics, onStartPracticing }: NavProps) {
  const [scrolled,       setScrolled]       = useState(false);
  const [pomodoroOpen,   setPomodoroOpen]   = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const navBase: React.CSSProperties = {
    position: 'sticky', top: 0, zIndex: 100,
    background: scrolled ? 'rgba(242,240,235,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'background 0.3s ease, border-color 0.3s ease',
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: active ? 'var(--ink)' : 'var(--ink-muted)',
    padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
    border: 'none', background: active ? 'var(--surface)' : 'none',
    transition: 'color 0.18s ease, background 0.18s ease',
    whiteSpace: 'nowrap',
  });

  function handleNavClick(fn: () => void) {
    fn();
    setMobileMenuOpen(false);
  }

  return (
    <>
      <nav style={navBase} role="navigation" aria-label="Main navigation">
        {/* ── Desktop row ── */}
        <div style={{
          height: 56, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 20px',
        }}>
          {/* Logo */}
          <button
            onClick={() => handleNavClick(onHome)}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15,
              color: 'var(--ink)', background: 'none', border: 'none',
              cursor: 'pointer', letterSpacing: '-0.01em', whiteSpace: 'nowrap',
            }}
          >
            🎓 CA Finals
          </button>

          {/* Centre links — hidden on mobile */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {Object.values(PAPERS_DATA).map(p => (
              <button
                key={p.id}
                onClick={() => onSubjectClick(p.id)}
                style={linkStyle(activeSubject === p.id && view === 'subject')}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                }}
                onMouseLeave={e => {
                  const active = activeSubject === p.id && view === 'subject';
                  (e.currentTarget as HTMLElement).style.color = active ? 'var(--ink)' : 'var(--ink-muted)';
                  (e.currentTarget as HTMLElement).style.background = active ? 'var(--surface)' : 'none';
                }}
              >
                {p.shortName}
              </button>
            ))}
            <button
              onClick={onAnalytics}
              style={linkStyle(view === 'analytics')}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = view === 'analytics' ? 'var(--ink)' : 'var(--ink-muted)'; (e.currentTarget as HTMLElement).style.background = view === 'analytics' ? 'var(--surface)' : 'none'; }}
            >
              Analytics
            </button>
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Pomodoro button */}
            <button
              id="nav-pomodoro"
              onClick={() => setPomodoroOpen(o => !o)}
              title="Pomodoro Focus Timer"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
                background: pomodoroOpen ? 'var(--surface2)' : 'var(--surface)',
                color: 'var(--ink)', border: '1px solid var(--border-dark)',
                borderRadius: 99, padding: '7px 14px', cursor: 'pointer',
                transition: 'background 0.18s ease, transform 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = pomodoroOpen ? 'var(--surface2)' : 'var(--surface)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              <span style={{ fontSize: 14 }}>⏱</span>
              <span className="pomodoro-label">Focus</span>
            </button>

            {/* Practice CTA — hidden on tiny screens */}
            <button
              id="nav-start-practicing"
              onClick={onStartPracticing}
              className="nav-cta"
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
                background: 'var(--ink)', color: '#F2F0EB',
                border: 'none', borderRadius: 99, padding: '8px 18px',
                cursor: 'pointer', transition: 'opacity 0.18s ease, transform 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Practice →
            </button>

            {/* Hamburger — visible on mobile */}
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(o => !o)}
              style={{
                display: 'none', background: 'none', border: 'none',
                cursor: 'pointer', padding: 8, color: 'var(--ink)',
                flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ display: 'block', width: 20, height: 2, background: 'currentColor', borderRadius: 99, transition: 'transform 0.2s ease, opacity 0.2s ease', transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : '' }} />
              <span style={{ display: 'block', width: 20, height: 2, background: 'currentColor', borderRadius: 99, transition: 'opacity 0.2s ease', opacity: mobileMenuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 20, height: 2, background: 'currentColor', borderRadius: 99, transition: 'transform 0.2s ease, opacity 0.2s ease', transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }} />
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu slide-down"
            style={{
              borderTop: '1px solid var(--border)',
              background: 'rgba(242,240,235,0.98)',
              backdropFilter: 'blur(16px)',
              padding: '12px 20px 20px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
              {Object.values(PAPERS_DATA).map(p => (
                <button
                  key={p.id}
                  onClick={() => handleNavClick(() => onSubjectClick(p.id))}
                  style={{
                    ...linkStyle(activeSubject === p.id && view === 'subject'),
                    textAlign: 'center', padding: '10px 4px',
                    border: `1px solid ${activeSubject === p.id && view === 'subject' ? 'var(--border-dark)' : 'var(--border)'}`,
                    borderRadius: 10,
                  }}
                >
                  {p.shortName}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => handleNavClick(onAnalytics)}
                style={{ flex: 1, ...linkStyle(view === 'analytics'), border: '1px solid var(--border)', borderRadius: 10, padding: '10px', textAlign: 'center' }}
              >
                Analytics
              </button>
              <button
                onClick={() => handleNavClick(onStartPracticing)}
                style={{
                  flex: 1, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13,
                  background: 'var(--ink)', color: '#F2F0EB', border: 'none',
                  borderRadius: 10, padding: '10px', cursor: 'pointer',
                }}
              >
                Practice →
              </button>
            </div>
          </div>
        )}
      </nav>

      <Pomodoro open={pomodoroOpen} onClose={() => setPomodoroOpen(false)} />
    </>
  );
}
