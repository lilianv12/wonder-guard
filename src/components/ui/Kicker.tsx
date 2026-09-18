export interface KickerProps {
  children: React.ReactNode;
  tone?: 'teal' | 'onDark' | 'accent' | 'muted';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const COLORS: Record<string, string> = {
  onDark: '#C9C2B5',
  accent: '#EE8A5A',
  muted: '#8C7E6F',
  teal: '#1F7A6D',
};

export function Kicker({ children, tone = 'teal', as = 'div', className }: KickerProps) {
  const Cmp = as as any;
  return (
    <Cmp
      className={`font-mono font-semibold text-[11px] uppercase tracking-[0.16em] ${className ?? ''}`}
      style={{ color: COLORS[tone] }}
    >
      {children}
    </Cmp>
  );
}
