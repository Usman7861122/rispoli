import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm({ api, interests }: { api: string; interests: string[] }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(api, { method: 'POST', body: new FormData(e.currentTarget) });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') return <p role="status">Thank you. We will call you soon.</p>;

  const field = 'w-full rounded border border-ink/20 px-4 py-3';
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input name="name" required placeholder="Full name" aria-label="Full name" className={field} />
      <input name="phone" required type="tel" placeholder="Phone" aria-label="Phone" className={field} />
      <input name="email" type="email" placeholder="Email" aria-label="Email" className={field} />
      <select name="interest" aria-label="Interested in" className={field} defaultValue="">
        <option value="" disabled>I am interested in...</option>
        {interests.map((i) => <option key={i}>{i}</option>)}
      </select>
      <textarea name="message" rows={4} placeholder="Message" aria-label="Message" className={field} />
      <button disabled={status === 'sending'} className="rounded-full bg-brand px-6 py-3 text-white">
        {status === 'sending' ? 'Sending...' : 'Request an appointment'}
      </button>
      {status === 'error' && <p role="alert">Something went wrong. Please call us.</p>}
    </form>
  );
}
