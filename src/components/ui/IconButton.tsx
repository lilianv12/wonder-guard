import { useState } from 'react';
import { Icon } from './Icon';

const BOX = { sm: 28, md: 36, lg: 44 };
const GLYPH = { sm: 14, md: 18, lg: 20 };

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  size?: keyof typeof BOX;
  variant?: 'ghost' | 'solid' | 'outline' | 'inverse';
}

export function IconButton({ icon, label, size = 'md', variant = 'ghost', disabled = false, className, ...rest }: IconButtonProps) {
  const [hover, setHover] = useState(false);
  const box = BOX[size];
  const onDark = variant === 'inverse';
  const bg = onDark
    ? hover ? 'rgba(245,241,232,.12)' : 'transparent'
    : variant === 'solid'
      ? hover ? '#0A2E35' : '#0E3B43'
      : hover ? 'rgba(14,59,67,.08)' : 'transparent';
  const fg = onDark ? '#F5F1E8' : variant === 'solid' ? '#F5F1E8' : '#0E3B43';
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`inline-flex items-center justify-center rounded-ws transition-colors duration-fast ${
        disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'
      } ${variant === 'outline' ? 'border border-black/15' : 'border border-transparent'} ${className ?? ''}`}
      style={{ width: box, height: box, background: bg, color: fg }}
      {...rest}
    >
      <Icon name={icon} size={GLYPH[size]} />
    </button>
  );
}
