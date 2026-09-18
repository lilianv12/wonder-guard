import { useState } from 'react';

export interface RadioGroupProps {
  options: (string | { value: string; label: string })[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
  direction?: 'row' | 'column';
  disabled?: boolean;
}

export function RadioGroup({ options, value, defaultValue, onChange, name, direction = 'column', disabled = false }: RadioGroupProps) {
  const controlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue);
  const current = controlled ? value : inner;
  const pick = (v: string) => {
    if (disabled) return;
    if (!controlled) setInner(v);
    onChange?.(v);
  };
  return (
    <div role="radiogroup" className={`flex ${direction === 'row' ? 'flex-row gap-5' : 'flex-col gap-2.5'}`}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        const on = current === v;
        return (
          <label
            key={v}
            onClick={() => pick(v)}
            className={`inline-flex items-center gap-2.5 text-sm ${disabled ? 'cursor-not-allowed opacity-45' : 'cursor-pointer'}`}
            style={{ color: '#10262A' }}
          >
            <span
              role="radio"
              aria-checked={on}
              className="flex-none rounded-full inline-flex items-center justify-center transition-colors duration-fast"
              style={{ width: 18, height: 18, border: `1px solid ${on ? '#0E3B43' : 'rgba(16,38,42,.28)'}`, background: '#FFFFFF' }}
            >
              {on ? <span className="rounded-full" style={{ width: 9, height: 9, background: '#0E3B43' }} /> : null}
            </span>
            {label}
            <input type="radio" name={name} value={v} checked={on} readOnly className="hidden" />
          </label>
        );
      })}
    </div>
  );
}
