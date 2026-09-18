type Tone = 'neutral' | 'petrol' | 'normal' | 'caution' | 'alert' | 'accent';

const TONES: Record<Tone, React.CSSProperties> = {
  neutral: { background: '#ECE6DD', color: '#10262A', border: '1px solid rgba(16,38,42,.28)' },
  petrol: { background: 'rgba(14,59,67,.10)', color: '#0E3B43', border: '1px solid rgba(14,59,67,.22)' },
  normal: { background: '#E4F4F0', color: '#14685A', border: '1px solid rgba(31,169,143,.35)' },
  caution: { background: '#FCEEDB', color: '#8A5A16', border: '1px solid rgba(240,168,90,.45)' },
  alert: { background: '#F8E3E0', color: '#9E2A1E', border: '1px solid rgba(206,59,44,.35)' },
  accent: { background: 'rgba(238,138,90,.16)', color: '#A5502A', border: '1px solid rgba(238,138,90,.4)' },
};

export interface BadgeProps {
  tone?: Tone;
  children: React.ReactNode;
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-[9px] py-[3px] rounded-full font-mono text-[11px] font-semibold uppercase tracking-[.08em] whitespace-nowrap"
      style={TONES[tone]}
    >
      {children}
    </span>
  );
}
