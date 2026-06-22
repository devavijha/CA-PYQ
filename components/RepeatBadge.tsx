'use client';
import React from 'react';

interface RepeatBadgeProps { count: number }

export function RepeatBadge({ count }: RepeatBadgeProps) {
  if (count < 2) return null;
  const capped = Math.min(count, 4);

  const styles: Record<number, React.CSSProperties> = {
    2: { background: 'rgba(171,171,171,0.2)', color: '#6B6B6B', border: '1px solid rgba(171,171,171,0.4)' },
    3: { background: 'rgba(245,200,66,0.2)',  color: '#8B6914', border: '1px solid rgba(245,200,66,0.5)' },
    4: { background: 'rgba(244,135,106,0.2)', color: '#C44B2B', border: '1px solid rgba(244,135,106,0.5)' },
  };
  const labels: Record<number, string> = {
    2: `${count}× asked`,
    3: `${count}× 🌶`,
    4: `${count}× 🔥`,
  };

  return (
    <span
      style={{
        ...styles[capped],
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: 11,
        borderRadius: 6,
        padding: '3px 10px',
        whiteSpace: 'nowrap',
      }}
      className={capped >= 4 ? 'border-pulse' : ''}
    >
      {labels[capped]}
    </span>
  );
}
