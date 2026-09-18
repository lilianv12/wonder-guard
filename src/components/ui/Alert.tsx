import { Icon } from './Icon';
import { IconButton } from './IconButton';

type Tone = 'info' | 'normal' | 'caution' | 'alert';

const TONES: Record<Tone, { bg: string; border: string; ink: string; icon: string }> = {
  info: { bg: 'rgba(14,59,67,.07)', border: 'rgba(14,59,67,.22)', ink: '#0E3B43', icon: 'info' },
  normal: { bg: '#E4F4F0', border: 'rgba(31,169,143,.4)', ink: '#14685A', icon: 'check-circle' },
  caution: { bg: '#FCEEDB', border: 'rgba(240,168,90,.5)', ink: '#8A5A16', icon: 'alert-triangle' },
  alert: { bg: '#F8E3E0', border: 'rgba(206,59,44,.4)', ink: '#9E2A1E', icon: 'alert-octagon' },
};

export interface AlertProps {
  tone?: Tone;
  title?: string;
  children?: React.ReactNode;
  onDismiss?: () => void;
}

export function Alert({ tone = 'info', title, children, onDismiss }: AlertProps) {
  const t = TONES[tone];
  return (
    <div role="status" className="flex gap-3 items-start p-3.5 rounded-wm" style={{ background: t.bg, border: `1px solid ${t.border}`, color: '#10262A' }}>
      <span className="flex pt-px" style={{ color: t.ink }}>
        <Icon name={t.icon} size={18} />
      </span>
      <div className="flex-1 min-w-0">
        {title ? (
          <div className="font-sans font-semibold text-[15px]" style={{ color: t.ink, marginBottom: children ? 3 : 0 }}>
            {title}
          </div>
        ) : null}
        {children ? <div className="text-sm leading-normal">{children}</div> : null}
      </div>
      {onDismiss ? <IconButton icon="x" label="Dismiss" size="sm" onClick={onDismiss} /> : null}
    </div>
  );
}
