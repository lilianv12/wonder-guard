import { useState } from 'react';
import { Icon } from './Icon';

const SIZES = {
  sm: { fontSize: 13, padding: '7px 12px', gap: 6, icon: 14 },
  md: { fontSize: 14, padding: '10px 18px', gap: 8, icon: 16 },
  lg: { fontSize: 16, padding: '14px 26px', gap: 10, icon: 18 },
};

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'inverse' | 'inverse-outline';

const VARIANTS: Record<Variant, { base: React.CSSProperties; hover: React.CSSProperties; active: React.CSSProperties }> = {
  primary: {
    base: { background: '#0E3B43', color: '#F5F1E8', border: '1px solid #0E3B43' },
    hover: { background: '#0A2E35', borderColor: '#0A2E35' },
    active: { background: '#08262B', borderColor: '#08262B' },
  },
  secondary: {
    base: { background: 'transparent', color: '#0E3B43', border: '1px solid rgba(16,38,42,.28)' },
    hover: { background: 'rgba(14,59,67,.08)', borderColor: '#0E3B43' },
    active: { background: 'rgba(14,59,67,.14)', borderColor: '#0E3B43' },
  },
  accent: {
    base: { background: '#EE8A5A', color: '#10262A', border: '1px solid #EE8A5A' },
    hover: { background: '#DE7746', borderColor: '#DE7746' },
    active: { background: '#C8683B', borderColor: '#C8683B' },
  },
  ghost: {
    base: { background: 'transparent', color: '#0E3B43', border: '1px solid transparent' },
    hover: { background: 'rgba(14,59,67,.08)' },
    active: { background: 'rgba(14,59,67,.14)' },
  },
  inverse: {
    base: { background: '#F5F1E8', color: '#0E3B43', border: '1px solid #F5F1E8' },
    hover: { background: '#FFFFFF', borderColor: '#FFFFFF' },
    active: { background: '#ECE6DD', borderColor: '#ECE6DD' },
  },
  'inverse-outline': {
    base: { background: 'transparent', color: '#F5F1E8', border: '1px solid rgba(245,241,232,.18)' },
    hover: { background: 'rgba(245,241,232,.10)', borderColor: 'rgba(245,241,232,.45)' },
    active: { background: 'rgba(245,241,232,.16)' },
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: keyof typeof SIZES;
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = 'button',
  children,
  style,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size];
  const v = VARIANTS[variant];
  const stateStyle = disabled ? {} : active ? v.active : hover ? v.hover : {};
  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      className="font-sans font-semibold leading-tight tracking-[-0.005em] rounded-ws transition-all duration-fast"
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontSize: s.fontSize,
        padding: s.padding,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.42 : 1,
        ...v.base,
        ...stateStyle,
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
