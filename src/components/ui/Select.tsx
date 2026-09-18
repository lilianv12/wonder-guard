import { useState } from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: (string | { value: string; label: string })[];
  invalid?: boolean;
  size?: 'sm' | 'md';
}

export function Select({ options, invalid = false, disabled = false, size = 'md', className, ...rest }: SelectProps) {
  const [focus, setFocus] = useState(false);
  const border = invalid ? '#CE3B2C' : focus ? '#1F7A6D' : 'rgba(16,38,42,.28)';
  return (
    <div className="relative flex">
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`w-full box-border appearance-none rounded-ws outline-none font-sans transition-shadow duration-fast ${className ?? ''}`}
        style={{
          padding: size === 'sm' ? '7px 30px 7px 10px' : '11px 34px 11px 12px',
          fontSize: size === 'sm' ? 13 : 14.5,
          color: '#10262A',
          background: disabled ? '#ECE6DD' : '#FFFFFF',
          border: `1px solid ${border}`,
          boxShadow: focus && !invalid ? '0 0 0 3px rgba(238,138,90,.45)' : 'none',
        }}
        {...rest}
      >
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <span
        className="absolute right-[11px] top-1/2 pointer-events-none"
        style={{
          transform: 'translateY(-50%) rotate(45deg)',
          width: 7,
          height: 7,
          borderRight: '1.5px solid #8C7E6F',
          borderBottom: '1.5px solid #8C7E6F',
        }}
      />
    </div>
  );
}
