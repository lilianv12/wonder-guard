import { useNavigate } from 'react-router-dom';
import { Kicker } from '../components/ui/Kicker';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MetricTile } from '../components/ui/MetricTile';
import { Badge } from '../components/ui/Badge';
import { Icon } from '../components/ui/Icon';
import { StatusDot } from '../components/ui/StatusDot';

function Sparkline() {
  const pts = [28, 34, 31, 38, 44, 41, 47, 43, 46, 42, 45, 42];
  const max = 52;
  return (
    <div className="flex items-end gap-1 mt-5" style={{ height: 58 }}>
      {pts.map((p, i) => (
        <div
          key={i}
          className="flex-1 rounded-[1px]"
          style={{ height: `${(p / max) * 100}%`, background: i === pts.length - 1 ? '#EE8A5A' : 'rgba(31,169,143,.75)' }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="wg-hero-bg" style={{ color: '#F5F1E8' }}>
      <div className="wg-wrap grid gap-14 items-center" style={{ gridTemplateColumns: '1.15fr .85fr', padding: '104px 24px 96px' }}>
        <div>
          <Kicker tone="onDark">Continuous monitoring for urinary catheters</Kicker>
          <h1
            className="font-sans font-extrabold leading-[1.02] tracking-[-0.02em]"
            style={{ fontSize: 64, margin: '18px 0 20px' }}
          >
            Urine output, read continuously
          </h1>
          <p className="text-lg leading-relaxed max-w-[46ch] m-0" style={{ color: '#F5F1E8' }}>
            A small monitor clips onto the drainage line of a catheter the hospital is already using. It reads that
            line continuously and sends the information straight to the care team and the patient record.
          </p>
          <div className="flex gap-3 mt-[30px]">
            <Button variant="inverse" size="lg" onClick={() => navigate('/pilot')}>
              Request a pilot
            </Button>
            <Button variant="inverse-outline" size="lg" onClick={() => navigate('/how-it-works')}>
              How it works
            </Button>
          </div>
        </div>
        <Card tone="charcoal" padding={22} elevation={3}>
          <div className="flex justify-between items-center">
            <Kicker tone="onDark">Ward 4B · Bed 12</Kicker>
            <StatusDot status="normal" />
          </div>
          <div className="flex items-baseline gap-2 mt-[18px]">
            <span className="wg-num font-semibold leading-none" style={{ fontSize: 64, color: '#F5F1E8' }}>
              42
            </span>
            <span className="font-mono text-sm" style={{ color: '#C9C2B5' }}>
              mL/h
            </span>
          </div>
          <Sparkline />
          <div className="grid grid-cols-2 gap-2.5 mt-4">
            <div>
              <Kicker tone="onDark">Last reading</Kicker>
              <div className="wg-num text-[17px] mt-[5px]" style={{ color: '#F5F1E8' }}>
                14:22
              </div>
            </div>
            <div>
              <Kicker tone="onDark">Interval</Kicker>
              <div className="wg-num text-[17px] mt-[5px]" style={{ color: '#F5F1E8' }}>
                5 min
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="wg-sec" style={{ background: '#F5F1E8' }}>
      <div className="wg-wrap">
        <Kicker>The problem</Kicker>
        <div className="grid gap-14 mt-[18px] items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <h2 className="font-sans font-extrabold leading-[1.1] tracking-[-0.02em] m-0" style={{ fontSize: 40 }}>
            A vital sign read off a bag by eye, every few hours
          </h2>
          <div className="flex flex-col gap-4 text-[16.5px] leading-relaxed" style={{ color: '#5C6A6C' }}>
            <p className="m-0">
              Urine output is a core vital sign. It tells clinicians how well blood is reaching the kidneys, and it
              is one of the earliest signs that a patient is deteriorating.
            </p>
            <p className="m-0">
              Continuous monitors do exist, but they are built and priced for intensive care, so hospitals put them
              on a small number of beds. Every other catheterized patient gets a manual reading and a gap of
              several hours in between.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-11">
          <MetricTile label="Catheters used worldwide" value="100M+" note="per year" />
          <MetricTile label="Typical manual reading" value="1" note="per shift-hour block" />
          <MetricTile label="Continuous coverage today" value="ICU" note="only a small number of beds" />
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const navigate = useNavigate();
  const items = [
    { icon: 'link-2', title: 'Clips onto the existing line', body: 'The monitor attaches to the drainage line of the catheter the hospital already uses. The catheter does not change.' },
    { icon: 'activity', title: 'Reads continuously', body: 'The line is read continuously rather than at shift intervals, and nothing we add touches the patient.' },
    { icon: 'clipboard-list', title: 'Sends to the care team', body: 'Readings go straight to the care team and the patient record, so the number is charted without transcription.' },
  ];
  return (
    <section className="wg-sec" style={{ background: '#ECE6DD' }}>
      <div className="wg-wrap">
        <Kicker>Our solution</Kicker>
        <h2
          className="font-sans font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: 40, margin: '18px 0 8px', maxWidth: '24ch' }}
        >
          Non-contact, clip-on, continuous
        </h2>
        <p className="text-[16.5px] leading-relaxed max-w-[58ch]" style={{ color: '#5C6A6C', margin: '0 0 36px' }}>
          Because it is designed to be low cost, it can go on ordinary hospital wards rather than only in intensive
          care.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {items.map((it) => (
            <Card key={it.title} padding={24}>
              <span className="flex" style={{ color: '#1F7A6D' }}>
                <Icon name={it.icon} size={22} />
              </span>
              <h3 className="font-sans font-semibold text-[19px]" style={{ margin: '16px 0 8px' }}>
                {it.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed" style={{ color: '#5C6A6C' }}>
                {it.body}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-7">
          <Button variant="secondary" iconRight="arrow-right" onClick={() => navigate('/how-it-works')}>
            See the workflow
          </Button>
        </div>
      </div>
    </section>
  );
}

function WardBand() {
  return (
    <section className="wg-hero-bg" style={{ color: '#F5F1E8', padding: '80px 0' }}>
      <div className="wg-wrap grid gap-14 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <Kicker tone="onDark">Where it goes</Kicker>
          <h2
            className="font-sans font-extrabold leading-[1.12] tracking-[-0.02em]"
            style={{ fontSize: 36, margin: '16px 0 14px' }}
          >
            The patients nobody is watching closely
          </h2>
          <p className="text-[16.5px] leading-relaxed m-0 max-w-[44ch]" style={{ color: '#F5F1E8' }}>
            Ordinary wards, not only intensive care. That is the whole point — the beds that currently get a manual
            reading and a gap of several hours in between.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MetricTile tone="charcoal" label="Ward 4B" value="24" note="beds monitored" />
          <MetricTile tone="charcoal" label="Readings / bed / hour" value="12" />
          <MetricTile tone="charcoal" label="Patient contact" value="None" note="non-contact, clip-on" />
          <MetricTile tone="charcoal" label="Catheter change" value="None" note="works with existing stock" />
        </div>
      </div>
    </section>
  );
}

function Status() {
  return (
    <section className="wg-sec" style={{ background: '#F5F1E8' }}>
      <div className="wg-wrap grid gap-14" style={{ gridTemplateColumns: '.9fr 1.1fr' }}>
        <div>
          <Kicker>Where we are</Kicker>
          <h2 className="font-sans font-semibold leading-[1.15]" style={{ fontSize: 32, margin: '16px 0 14px' }}>
            Pre-seed, spun out of McMaster University
          </h2>
          <div className="flex gap-2 flex-wrap">
            <Badge tone="neutral">Investigational device</Badge>
            <Badge tone="neutral">Patent pending</Badge>
            <Badge tone="neutral">Pre-seed</Badge>
          </div>
        </div>
        <Card padding={26}>
          <p className="m-0 text-[16.5px] leading-relaxed" style={{ color: '#5C6A6C' }}>
            Wonder Guard measures and alerts; clinicians decide. We make no diagnostic claims. The measurement
            method is described as non-contact and clip-on; further detail is withheld while the patent is pending.
          </p>
          <div className="mt-5 pt-[18px] flex gap-[26px]" style={{ borderTop: '1px solid rgba(16,38,42,.14)' }}>
            <div>
              <Kicker tone="muted">Pilot sites</Kicker>
              <div className="wg-num text-[22px] mt-1.5">In discussion</div>
            </div>
            <div>
              <Kicker tone="muted">Regulatory</Kicker>
              <div className="wg-num text-[22px] mt-1.5">Pre-submission</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function HomeScreen() {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <WardBand />
      <Status />
    </div>
  );
}
