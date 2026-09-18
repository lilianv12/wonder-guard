export interface LogotypeProps {
  tone?: 'petrol' | 'white' | 'ink';
  size?: number;
  showSub?: boolean;
  className?: string;
}

export function Logotype({ tone = 'petrol', size = 20, showSub = false, className }: LogotypeProps) {
  const color = tone === 'white' ? '#F5F1E8' : tone === 'ink' ? '#10262A' : '#0E3B43';
  return (
    <span className={`inline-flex flex-col gap-0.5 ${className ?? ''}`}>
      <span
        className="font-sans font-extrabold leading-none tracking-[-0.035em]"
        style={{ fontSize: size, color }}
      >
        Wonder Guard
      </span>
      {showSub ? (
        <span
          className="font-mono uppercase tracking-[0.14em]"
          style={{ fontSize: Math.max(8, Math.round(size * 0.36)), color: tone === 'white' ? '#C9C2B5' : '#8C7E6F' }}
        >
          Continuous urine output monitoring
        </span>
      ) : null}
    </span>
  );
}
