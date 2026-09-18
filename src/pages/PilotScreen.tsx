import { useState } from 'react';
import { Kicker } from '../components/ui/Kicker';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Field } from '../components/ui/Field';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { RadioGroup } from '../components/ui/RadioGroup';
import { Alert } from '../components/ui/Alert';
import { Badge } from '../components/ui/Badge';
import { Toast } from '../components/ui/Toast';

export function PilotScreen() {
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setToast(true);
  };

  return (
    <section style={{ background: '#F5F1E8', padding: '72px 0 96px', position: 'relative' }}>
      <div className="wg-wrap grid gap-14 items-start" style={{ gridTemplateColumns: '.85fr 1.15fr' }}>
        <div>
          <Kicker>Request a pilot</Kicker>
          <h1
            className="font-sans font-extrabold leading-[1.06] tracking-[-0.02em]"
            style={{ fontSize: 44, margin: '16px 0 16px' }}
          >
            Tell us about your unit
          </h1>
          <p className="text-[16.5px] leading-relaxed" style={{ color: '#5C6A6C', margin: '0 0 22px' }}>
            We are pre-seed and selecting a small number of pilot sites. Tell us where you would put the monitor
            and how urine output is recorded on that unit today.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge tone="neutral">Investigational device</Badge>
            <Badge tone="neutral">Not for sale</Badge>
          </div>
        </div>
        <Card padding={28} elevation={2}>
          {sent ? (
            <div>
              <Alert tone="normal" title="Request received">
                Thanks — we have your details and will reply within two business days.
              </Alert>
              <div className="mt-[18px]">
                <Button variant="secondary" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid grid-cols-2 gap-[18px]">
              <Field label="Name" required htmlFor="n">
                <Input id="n" placeholder="Dr. A. Okafor" />
              </Field>
              <Field label="Work email" required htmlFor="e" hint="We reply within two business days">
                <Input id="e" icon="mail" placeholder="name@hospital.org" />
              </Field>
              <Field label="Hospital" htmlFor="h" style={{ gridColumn: '1 / -1' }}>
                <Input id="h" placeholder="Hamilton General Hospital" />
              </Field>
              <Field label="Unit type" htmlFor="u">
                <Select id="u" options={['General ward', 'Post-op', 'Step-down', 'ICU']} />
              </Field>
              <Field label="Catheterized beds" htmlFor="b" hint="Approximate">
                <Input id="b" mono defaultValue="24" />
              </Field>
              <div style={{ gridColumn: '1 / -1' }}>
                <Field label="How is urine output recorded today?">
                  <RadioGroup
                    name="rec"
                    options={['By eye, on paper', 'By eye, into the EMR', 'Continuous monitor on some beds']}
                    defaultValue="By eye, on paper"
                  />
                </Field>
              </div>
              <div className="flex flex-col gap-3 pt-1" style={{ gridColumn: '1 / -1' }}>
                <Checkbox label="Email me the clinical brief" defaultChecked />
                <Button type="submit" variant="accent" size="lg" iconRight="arrow-right">
                  Send request
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
      {toast ? (
        <div className="absolute" style={{ right: 28, bottom: 28 }}>
          <Toast tone="normal" title="Request sent" onDismiss={() => setToast(false)}>
            We will reply within two business days.
          </Toast>
        </div>
      ) : null}
    </section>
  );
}
