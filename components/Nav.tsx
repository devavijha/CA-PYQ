'use client';
import { useEffect, useState } from 'react';
import { PAPERS_DATA } from '@/lib/data';

interface NavProps {
  view: string;
  activeSubject: string | null;
  onHome: () => void;
  onSubjectClick: (id: string) => void;
  onAnalytics: () => void;
  onStartPracticing: () => void;
}

export function Nav({ view, activeSubject, onHome, onSubjectClick, onAnalytics, onStartPracticing }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navBase: React.CSSProperties = {
    position: 'sticky', top: 0, zIndex: 100, height: 56,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 32px',
    background: scrolled ? 'rgba(242,240,235,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'background 0.3s ease, border-color 0.3s ease',
  };

  return (
    <nav style={navBase} role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <button
        onClick={onHome}
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em' }}
      >
        🎓 CA PYQ
      </button>

      {/* Subject Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {Object.values(PAPERS_DATA).map(p => (
          <button
            key={p.id}
            onClick={() => onSubjectClick(p.id)}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: (activeSubject === p.id && view === 'subject') ? 'var(--ink)' : 'var(--ink-muted)',
              padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
              border: 'none', background: 'none', transition: 'color 0.18s ease, background 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = (activeSubject === p.id && view === 'subject') ? 'var(--ink)' : 'var(--ink-muted)'; (e.currentTarget as HTMLElement).style.background = 'none'; }}
          >
            {p.shortName}
          </button>
        ))}

        <button
          onClick={onAnalytics}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: view === 'analytics' ? 'var(--ink)' : 'var(--ink-muted)',
            padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
            border: 'none', background: 'none', transition: 'color 0.18s ease, background 0.18s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = view === 'analytics' ? 'var(--ink)' : 'var(--ink-muted)'; (e.currentTarget as HTMLElement).style.background = 'none'; }}
        >
          Analytics
        </button>
      </div>

      {/* CTA */}
      <button
        id="nav-start-practicing"
        onClick={onStartPracticing}
        style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
          background: 'var(--ink)', color: '#F2F0EB',
          border: 'none', borderRadius: 99, padding: '8px 18px',
          cursor: 'pointer', transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
      >
        Start Practicing →
      </button>
    </nav>
  );
}
