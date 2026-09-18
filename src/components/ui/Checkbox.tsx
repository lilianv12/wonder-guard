import { useState } from 'react';
import { Icon } from './Icon';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label: React.ReactNode;
  disabled?: boolean;
}

export function Checkbox({ checked, defaultChecked, onChange, label, disabled = false }: CheckboxProps) {
  const controlled = checked !== undefined;
  const [inner, setInner] = useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (!controlled) setInner(!on);
    onChange?.(!on);
  };
  return (
    <label
      onClick={toggle}
      className={`inline-flex items-center gap-2.5 text-sm ${disabled ? 'cursor-not-allowed opacity-45' : 'cursor-pointer'}`}
      style={{ color: '#10262A' }}
    >
      <span
        role="checkbox"
        aria-checked={!!on}
        className="flex-none inline-flex items-center justify-center rounded-wxs transition-colors duration-fast"
        style={{
          width: 18,
          height: 18,
          border: `1px solid ${on ? '#0E3B43' : 'rgba(16,38,42,.28)'}`,
          background: on ? '#0E3B43' : '#FFFFFF',
          color: '#F5F1E8',
        }}
      >
        {on ? <Icon name="check" size={12} strokeWidth={3} /> : null}
      </span>
      {label}
    </label>
  );
}
