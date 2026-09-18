import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logotype } from './ui/Logotype';
import { Button } from './ui/Button';
import { Kicker } from './ui/Kicker';

const NAV = [
  { to: '/', label: 'Overview' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/about', label: 'About' },
];

function SiteHeader() {
  const navigate = useNavigate();
  return (
    <header
      className="sticky top-0 z-20 backdrop-blur-sm"
      style={{ background: 'rgba(245,241,232,.92)', borderBottom: '1px solid rgba(16,38,42,.14)' }}
    >
      <div className="wg-wrap flex items-center gap-[34px]" style={{ height: 68 }}>
        <Link to="/" className="cursor-pointer">
          <Logotype size={19} />
        </Link>
        <nav className="flex gap-[26px] flex-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className="font-sans text-[14.5px] font-semibold tracking-[-0.005em] no-underline"
              style={({ isActive }) => ({ color: isActive ? '#1F7A6D' : '#5C6A6C' })}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Button size="sm" onClick={() => navigate('/pilot')}>
          Request a pilot
        </Button>
      </div>
    </header>
  );
}

function SiteFooter() {
  const navigate = useNavigate();
  return (
    <footer style={{ background: '#2F2E2B', color: '#F5F1E8', paddingTop: 56, paddingBottom: 32 }}>
      <div className="wg-wrap">
        <div
          className="grid gap-10 pb-10"
          style={{ gridTemplateColumns: '1.4fr 1fr 1fr', borderBottom: '1px solid rgba(245,241,232,.18)' }}
        >
          <div>
            <Logotype tone="white" size={20} showSub />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#C9C2B5', maxWidth: '34ch' }}>
              A pre-seed medical device company spun out of McMaster University.
            </p>
          </div>
          <div>
            <Kicker tone="onDark">Site</Kicker>
            <div className="flex flex-col gap-[9px] mt-3.5">
              {NAV.map((n) => (
                <button
                  key={n.to}
                  onClick={() => navigate(n.to)}
                  className="text-left font-sans font-semibold text-sm bg-transparent border-0 cursor-pointer p-0"
                  style={{ color: '#F5F1E8' }}
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/pilot')}
                className="text-left font-sans font-semibold text-sm bg-transparent border-0 cursor-pointer p-0"
                style={{ color: '#F5F1E8' }}
              >
                Request a pilot
              </button>
            </div>
          </div>
          <div>
            <Kicker tone="onDark">Contact</Kicker>
            <div className="font-mono text-[12.5px] leading-loose mt-3.5" style={{ color: '#C9C2B5' }}>
              <div>hello@wonderguard.example</div>
              <div>Hamilton, Ontario</div>
            </div>
          </div>
        </div>
        <div
          className="pt-[22px] flex justify-between gap-4 font-mono text-[10.5px] uppercase"
          style={{ letterSpacing: '.1em', color: '#8C7E6F' }}
        >
          <span>© 2026 Wonder Guard</span>
          <span>Investigational device · not for sale</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
