export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Field({ label, hint, error, required = false, htmlFor, children, className, style }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`} style={style}>
      {label ? (
        <label htmlFor={htmlFor} className="font-sans text-[13px] font-semibold" style={{ color: '#10262A' }}>
          {label}
          {required ? <span style={{ color: '#CE3B2C', marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span className="text-[12.5px]" style={{ color: '#9E2A1E' }}>
          {error}
        </span>
      ) : hint ? (
        <span className="text-[12.5px]" style={{ color: '#5C6A6C' }}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}
