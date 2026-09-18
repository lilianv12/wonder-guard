import { useState } from 'react';
import { Icon } from './Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
  icon?: string;
  mono?: boolean;
  size?: 'sm' | 'md';
}

export function Input({ invalid = false, disabled = false, icon, mono = false, size = 'md', className, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  const pad = size === 'sm' ? '7px 10px' : '11px 12px';
  const border = invalid ? '#CE3B2C' : focus ? '#1F7A6D' : 'rgba(16,38,42,.28)';
  return (
    <div className="relative flex items-center">
      {icon ? (
        <span className="absolute left-[11px] flex pointer-events-none" style={{ color: '#8C7E6F' }}>
          <Icon name={icon} size={16} />
        </span>
      ) : null}
      <input
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`w-full box-border rounded-ws outline-none transition-shadow duration-fast ${mono ? 'font-mono' : 'font-sans'} ${className ?? ''}`}
        style={{
          padding: pad,
          paddingLeft: icon ? 34 : undefined,
          fontSize: size === 'sm' ? 13 : 14.5,
          fontVariantNumeric: mono ? 'tabular-nums' : undefined,
          color: '#10262A',
          background: disabled ? '#ECE6DD' : '#FFFFFF',
          border: `1px solid ${border}`,
          boxShadow: focus && !invalid ? '0 0 0 3px rgba(238,138,90,.45)' : 'none',
        }}
        {...rest}
      />
    </div>
  );
}
