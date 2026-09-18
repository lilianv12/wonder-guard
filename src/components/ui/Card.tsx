import { useState } from 'react';

type Tone = 'light' | 'sunken' | 'petrol' | 'charcoal';

const TONES: Record<Tone, React.CSSProperties> = {
  light: { background: '#FFFFFF', color: '#10262A', border: '1px solid rgba(16,38,42,.14)' },
  sunken: { background: '#ECE6DD', color: '#10262A', border: '1px solid rgba(16,38,42,.14)' },
  petrol: { background: '#0E3B43', color: '#F5F1E8', border: '1px solid #0E3B43' },
  charcoal: { background: '#2F2E2B', color: '#F5F1E8', border: '1px solid #2F2E2B' },
};

const SHADOWS = ['none', '0 1px 2px rgba(16,38,42,.06)', '0 2px 8px rgba(16,38,42,.08)', '0 8px 24px rgba(16,38,42,.10)'];

export interface CardProps {
  tone?: Tone;
  elevation?: 0 | 1 | 2 | 3;
  padding?: number;
  interactive?: boolean;
  accentEdge?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ tone = 'light', elevation = 1, padding = 24, interactive = false, accentEdge = false, children, className, style }: CardProps) {
  const [hover, setHover] = useState(false);
  const t = TONES[tone];
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative rounded-wl overflow-hidden transition-transform duration-base ${interactive ? 'cursor-pointer' : ''} ${className ?? ''}`}
      style={{
        padding,
        boxShadow: interactive && hover ? SHADOWS[Math.min(3, elevation + 1)] : SHADOWS[elevation],
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        ...t,
        ...style,
      }}
    >
      {accentEdge ? <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: '#EE8A5A' }} /> : null}
      {children}
    </div>
  );
}
