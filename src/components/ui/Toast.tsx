import { Icon } from './Icon';
import { IconButton } from './IconButton';

type Tone = 'info' | 'normal' | 'caution' | 'alert';

const INK: Record<Tone, string> = { normal: '#1FA98F', caution: '#F0A85A', alert: '#CE3B2C', info: '#F5F1E8' };
const ICON: Record<Tone, string> = { normal: 'check-circle', caution: 'alert-triangle', alert: 'alert-octagon', info: 'info' };

export interface ToastProps {
  tone?: Tone;
  title?: string;
  children?: React.ReactNode;
  onDismiss?: () => void;
}

export function Toast({ tone = 'info', title, children, onDismiss }: ToastProps) {
  return (
    <div
      role="status"
      className="flex gap-3 items-start p-3.5 rounded-wm"
      style={{
        minWidth: 280,
        maxWidth: 420,
        background: '#2F2E2B',
        color: '#F5F1E8',
        border: '1px solid rgba(245,241,232,.18)',
        boxShadow: '0 8px 24px rgba(16,38,42,.10)',
      }}
    >
      <span className="flex pt-px" style={{ color: INK[tone] }}>
        <Icon name={ICON[tone]} size={17} />
      </span>
      <div className="flex-1 min-w-0">
        {title ? <div className="font-sans font-semibold text-[14.5px]">{title}</div> : null}
        {children ? (
          <div className="text-[13.5px] leading-normal mt-0.5" style={{ color: '#C9C2B5' }}>
            {children}
          </div>
        ) : null}
      </div>
      {onDismiss ? <IconButton icon="x" label="Dismiss" size="sm" variant="inverse" onClick={onDismiss} /> : null}
    </div>
  );
}
