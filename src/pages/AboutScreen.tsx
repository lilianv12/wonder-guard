import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Kicker } from '../components/ui/Kicker';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Icon } from '../components/ui/Icon';

const ARTICLES = [
  {
    source: 'McMaster Faculty of Engineering',
    date: 'June 11, 2025',
    title: "Wonder Guard: PhD student's new device aims to halt progression of UTIs",
    blurb:
      'Profile of founder Manak Bajaj and the $10,000 grand prize he won at the Arena Pitch Competition, chosen from more than 300 applicants across 37 Canadian institutions.',
    href: 'https://www.eng.mcmaster.ca/news/wonder-guard-phd-students-new-device-aims-to-halt-progression-of-utis/',
  },
  {
    source: 'The Forge, McMaster University',
    date: 'Company profile',
    title: 'Wonder Guard',
    blurb:
      "Wonder Guard's listing at McMaster's business incubator, with the founder profile and the featured stories that followed.",
    href: 'https://theforge.mcmaster.ca/startups/wonder-guard/',
  },
  {
    source: 'The Forge, McMaster University',
    date: 'November 24, 2025',
    title: 'Student innovator wins $15K at Startup Survivor for AI sensor that detects UTIs',
    blurb: 'First place at the annual Startup Survivor pitch competition.',
    href: 'https://theforge.mcmaster.ca/student-innovator-wins-15k-ss25/',
  },
];

function ArticleRow({ a }: { a: (typeof ARTICLES)[number] }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={a.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid gap-6 items-start px-6 py-[22px] no-underline transition-colors duration-fast"
      style={{
        gridTemplateColumns: '190px 1fr 24px',
        color: 'inherit',
        borderTop: '1px solid rgba(16,38,42,.14)',
        background: hover ? 'rgba(14,59,67,.08)' : 'transparent',
      }}
    >
      <div>
        <Kicker tone="muted">{a.source}</Kicker>
        <div className="wg-num text-xs mt-[7px]" style={{ color: '#5C6A6C' }}>
          {a.date}
        </div>
      </div>
      <div>
        <h3
          className="font-sans font-semibold text-[19px] leading-[1.3] m-0 transition-colors duration-fast"
          style={{ color: hover ? '#1F7A6D' : '#10262A' }}
        >
          {a.title}
        </h3>
        <p className="text-[15px] leading-relaxed max-w-[62ch]" style={{ margin: '8px 0 0', color: '#5C6A6C' }}>
          {a.blurb}
        </p>
      </div>
      <span className="flex justify-end pt-1" style={{ color: '#8C7E6F' }}>
        <Icon name="arrow-up-right" size={18} />
      </span>
    </a>
  );
}

export function AboutScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <section style={{ background: '#ECE6DD', borderBottom: '1px solid rgba(16,38,42,.14)' }}>
        <div className="wg-wrap grid gap-14 items-start" style={{ gridTemplateColumns: '1.1fr .9fr', padding: '72px 24px 56px' }}>
          <div>
            <Kicker>About</Kicker>
            <h1
              className="font-sans font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 48, margin: '16px 0 18px', maxWidth: '22ch' }}
            >
              Spun out of McMaster University
            </h1>
            <p className="text-[17px] leading-relaxed max-w-[58ch] m-0" style={{ color: '#5C6A6C' }}>
              Wonder Guard is a pre-seed medical device company founded by Manak Bajaj, a biomedical engineering
              PhD student at McMaster University, and built with support from the Forge, McMaster's business
              incubator.
            </p>
            <div className="flex gap-2 flex-wrap mt-[22px]">
              <Badge tone="neutral">Pre-seed</Badge>
              <Badge tone="neutral">Hamilton, Ontario</Badge>
              <Badge tone="neutral">Founded 2025</Badge>
            </div>
          </div>
          <Card padding={24}>
            <Kicker tone="muted">Founder</Kicker>
            <div className="font-sans font-semibold text-[22px] mt-3">Manak Bajaj</div>
            <p className="text-[15px] leading-relaxed" style={{ margin: '10px 0 0', color: '#5C6A6C' }}>
              Biomedical engineering PhD student at McMaster, supervised by Leyla Soleymani. Winner of the 2025
              Arena Pitch Competition and first place at Startup Survivor 2025.
            </p>
            <div className="mt-[18px] pt-4 flex gap-[26px]" style={{ borderTop: '1px solid rgba(16,38,42,.14)' }}>
              <div>
                <Kicker tone="muted">Incubator</Kicker>
                <div className="text-[15px] mt-1.5">The Forge</div>
              </div>
              <div>
                <Kicker tone="muted">Institution</Kicker>
                <div className="text-[15px] mt-1.5">McMaster University</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="wg-sec" style={{ background: '#F5F1E8' }}>
        <div className="wg-wrap">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Kicker>Articles</Kicker>
              <h2 className="font-sans font-semibold leading-[1.15]" style={{ fontSize: 32, margin: '14px 0 0' }}>
                Wonder Guard in the press
              </h2>
            </div>
            <span className="text-sm" style={{ color: '#5C6A6C' }}>
              External links, opening in a new tab.
            </span>
          </div>
          <Card padding={0} className="mt-7">
            {ARTICLES.map((a) => (
              <ArticleRow key={a.href} a={a} />
            ))}
          </Card>
          <div className="mt-8 flex gap-3 items-center">
            <Button onClick={() => navigate('/pilot')} iconRight="arrow-right">
              Request a pilot
            </Button>
            <span className="text-sm" style={{ color: '#5C6A6C' }}>
              For press enquiries, email hello@wonderguard.example.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
