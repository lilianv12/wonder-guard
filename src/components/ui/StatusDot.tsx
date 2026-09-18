const COLORS: Record<string, string> = {
  normal: '#1FA98F',
  caution: '#F0A85A',
  alert: '#CE3B2C',
  idle: '#8C7E6F',
};

export interface StatusDotProps {
  status?: 'normal' | 'caution' | 'alert' | 'idle';
  size?: number;
  label?: string;
  pulse?: boolean;
}

export function StatusDot({ status = 'normal', size = 8, label, pulse = false }: StatusDotProps) {
  return (
    <span className="inline-flex items-center gap-[7px]">
      <span
        className="rounded-full flex-none"
        style={{
          width: size,
          height: size,
          background: COLORS[status],
          boxShadow: pulse ? `0 0 0 4px ${status === 'alert' ? 'rgba(206,59,44,.18)' : 'rgba(31,169,143,.18)'}` : 'none',
        }}
      />
      {label ? (
        <span className="font-mono text-[11px] uppercase tracking-[.08em]" style={{ color: '#5C6A6C' }}>
          {label}
        </span>
      ) : null}
    </span>
  );
}
