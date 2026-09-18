import {
  Link2,
  Activity,
  ClipboardList,
  ArrowRight,
  ArrowUpRight,
  Info,
  CheckCircle,
  AlertTriangle,
  AlertOctagon,
  X,
  Check,
  Mail,
  type LucideProps,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  'link-2': Link2,
  activity: Activity,
  'clipboard-list': ClipboardList,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  info: Info,
  'check-circle': CheckCircle,
  'alert-triangle': AlertTriangle,
  'alert-octagon': AlertOctagon,
  x: X,
  check: Check,
  mail: Mail,
};

export interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export function Icon({ name, size = 18, strokeWidth = 1.75, color = 'currentColor', className }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-none ${className ?? ''}`}
      style={{ width: size, height: size, color }}
    >
      <Cmp size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
