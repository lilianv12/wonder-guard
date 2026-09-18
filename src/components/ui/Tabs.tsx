import { useState } from 'react';

export interface TabItem {
  value: string;
  label: string;
  count?: number;
}

export interface TabsProps {
  tabs: (string | TabItem)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  tone?: 'light' | 'onDark';
}

export function Tabs({ tabs, value, defaultValue, onChange, tone = 'light' }: TabsProps) {
  const first = tabs.length ? (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value) : undefined;
  const controlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue ?? first);
  const current = controlled ? value : inner;
  const onDark = tone === 'onDark';
  const pick = (v: string) => {
    if (!controlled) setInner(v);
    onChange?.(v);
  };
  return (
    <div role="tablist" className="flex gap-1" style={{ borderBottom: `1px solid ${onDark ? 'rgba(245,241,232,.18)' : 'rgba(16,38,42,.14)'}` }}>
      {tabs.map((t) => {
        const v = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const count = typeof t === 'string' ? undefined : t.count;
        const on = current === v;
        return (
          <button
            key={v}
            role="tab"
            aria-selected={on}
            onClick={() => pick(v)}
            className="inline-flex items-center gap-[7px] bg-transparent border-0 -mb-px px-3 py-2.5 cursor-pointer font-sans font-semibold text-sm transition-colors duration-fast"
            style={{
              borderBottom: `2px solid ${on ? (onDark ? '#EE8A5A' : '#1F7A6D') : 'transparent'}`,
              color: on ? (onDark ? '#F5F1E8' : '#0E3B43') : onDark ? '#C9C2B5' : '#5C6A6C',
            }}
          >
            {label}
            {count !== undefined ? (
              <span className="font-mono text-[11px]" style={{ fontVariantNumeric: 'tabular-nums', color: '#5C6A6C' }}>
                {count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
