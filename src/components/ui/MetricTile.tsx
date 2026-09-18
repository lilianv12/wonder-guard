import { Card } from './Card';
import { Kicker } from './Kicker';
import { StatusDot } from './StatusDot';

export interface MetricTileProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  status?: 'normal' | 'caution' | 'alert' | 'idle';
  note?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'light' | 'sunken' | 'petrol' | 'charcoal';
}

export function MetricTile({ label, value, unit, delta, status, note, size = 'md', tone = 'light' }: MetricTileProps) {
  const onDark = tone === 'petrol' || tone === 'charcoal';
  const valueSize = size === 'lg' ? 64 : size === 'sm' ? 28 : 44;
  return (
    <Card tone={tone} padding={size === 'sm' ? 16 : 20}>
      <div className="flex items-center justify-between gap-3">
        <Kicker tone={onDark ? 'onDark' : 'muted'}>{label}</Kicker>
        {status ? <StatusDot status={status} /> : null}
      </div>
      <div className="flex items-baseline gap-1.5 mt-2.5">
        <span
          className="font-mono font-semibold leading-none tracking-[-0.02em]"
          style={{ fontSize: valueSize, color: onDark ? '#F5F1E8' : '#10262A', fontVariantNumeric: 'tabular-nums' }}
        >
          {value}
        </span>
        {unit ? (
          <span className="font-mono text-[13px]" style={{ color: onDark ? '#C9C2B5' : '#5C6A6C' }}>
            {unit}
          </span>
        ) : null}
      </div>
      {delta || note ? (
        <div className="mt-2 flex gap-2 items-center text-[12.5px]" style={{ color: onDark ? '#C9C2B5' : '#5C6A6C' }}>
          {delta ? (
            <span className="font-mono" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {delta}
            </span>
          ) : null}
          {note ? <span>{note}</span> : null}
        </div>
      ) : null}
    </Card>
  );
}
