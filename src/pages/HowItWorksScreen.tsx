import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Kicker } from '../components/ui/Kicker';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { DataTable, type Column } from '../components/ui/DataTable';
import { Alert } from '../components/ui/Alert';

function Steps() {
  const steps = [
    { n: '01', title: 'Clip on', body: 'The monitor clips onto the drainage line of the catheter already in place. No change to the catheter, no contact with the patient.' },
    { n: '02', title: 'Read continuously', body: 'The line is read continuously instead of by eye at shift intervals.' },
    { n: '03', title: 'Send onward', body: 'Readings go to the care team and into the patient record, with alerts when output crosses a threshold the unit sets.' },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {steps.map((s) => (
        <Card key={s.n} padding={24}>
          <span className="wg-num text-[13px] font-semibold" style={{ color: '#EE8A5A' }}>
            {s.n}
          </span>
          <h3 className="font-sans font-semibold text-[19px]" style={{ margin: '12px 0 8px' }}>
            {s.title}
          </h3>
          <p className="m-0 text-[15px] leading-relaxed" style={{ color: '#5C6A6C' }}>
            {s.body}
          </p>
        </Card>
      ))}
    </div>
  );
}

const SPEC_COLUMNS: Column[] = [
  { key: 'k', header: 'Item' },
  { key: 'v', header: 'Value', mono: true },
];

const SPEC_ROWS = [
  { k: 'Mounting', v: 'Clip-on, drainage line' },
  { k: 'Patient contact', v: 'None' },
  { k: 'Catheter compatibility', v: 'Existing hospital stock' },
  { k: 'Reading interval', v: 'Continuous' },
  { k: 'Destination', v: 'Care team + patient record' },
  { k: 'Intended setting', v: 'General wards' },
];

export function HowItWorksScreen() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('workflow');
  return (
    <div>
      <section style={{ background: '#ECE6DD', borderBottom: '1px solid rgba(16,38,42,.14)' }}>
        <div className="wg-wrap" style={{ padding: '72px 24px 40px' }}>
          <Kicker>How it works</Kicker>
          <h1
            className="font-sans font-extrabold leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 48, margin: '16px 0 14px', maxWidth: '24ch' }}
          >
            Three steps, no change to the catheter
          </h1>
          <p className="text-[17px] leading-relaxed max-w-[58ch] m-0" style={{ color: '#5C6A6C' }}>
            The monitor sits on the line, not on the patient. Everything else in the unit's workflow stays where it
            is.
          </p>
          <div className="mt-7">
            <Tabs
              tabs={[
                { value: 'workflow', label: 'Workflow' },
                { value: 'spec', label: 'What we can say' },
              ]}
              value={tab}
              onChange={setTab}
            />
          </div>
        </div>
      </section>
      <section className="wg-sec" style={{ background: '#F5F1E8' }}>
        <div className="wg-wrap">
          {tab === 'workflow' ? (
            <Steps />
          ) : (
            <div className="grid gap-6 items-start" style={{ gridTemplateColumns: '1.2fr .8fr' }}>
              <Card padding={0}>
                <DataTable columns={SPEC_COLUMNS} rows={SPEC_ROWS} />
              </Card>
              <div className="flex flex-col gap-3.5">
                <Alert tone="info" title="Monitoring language only">
                  Wonder Guard measures and alerts. Clinicians decide. We publish no diagnostic or outcome claims
                  without a citation.
                </Alert>
                <Alert tone="caution" title="Mechanism withheld">
                  The measurement method is described as non-contact and clip-on. Further detail is withheld while
                  the patent is pending.
                </Alert>
              </div>
            </div>
          )}
          <div className="mt-9 flex gap-3 items-center">
            <Button onClick={() => navigate('/pilot')} iconRight="arrow-right">
              Request a pilot
            </Button>
            <span className="text-sm" style={{ color: '#5C6A6C' }}>
              We reply within two business days.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
