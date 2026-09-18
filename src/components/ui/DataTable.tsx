import { useState } from 'react';

export interface Column {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  mono?: boolean;
}

export interface DataTableProps {
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  onRowClick?: (row: Record<string, React.ReactNode>, index: number) => void;
}

export function DataTable({ columns, rows, onRowClick }: DataTableProps) {
  const [hoverRow, setHoverRow] = useState(-1);
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className="px-3.5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[.12em] whitespace-nowrap"
                style={{ textAlign: c.align ?? 'left', color: '#5C6A6C', borderBottom: '1px solid rgba(16,38,42,.28)' }}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              onMouseEnter={() => setHoverRow(i)}
              onMouseLeave={() => setHoverRow(-1)}
              onClick={onRowClick ? () => onRowClick(r, i) : undefined}
              className="transition-colors duration-fast"
              style={{ background: hoverRow === i ? 'rgba(14,59,67,.08)' : 'transparent', cursor: onRowClick ? 'pointer' : undefined }}
            >
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={c.mono ? 'font-mono text-[13px]' : 'font-sans text-sm'}
                  style={{
                    textAlign: c.align ?? 'left',
                    padding: '13px 14px',
                    borderBottom: '1px solid rgba(16,38,42,.14)',
                    color: '#10262A',
                    fontVariantNumeric: c.mono ? 'tabular-nums' : undefined,
                    verticalAlign: 'middle',
                  }}
                >
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
