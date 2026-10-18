import { useState } from 'react';
import { emailUrl, formUrl, socialLinks, whatsappUrl } from '../config/brand';
import ExternalLink from './ExternalLink';

const packages = ['Starter', 'Business', 'Premium', 'E-commerce', 'Not sure yet'];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    try {
      const res = await fetch(formUrl, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact">
      <div className="w">
        <div className="contact rv">
          <div className="contact-grid">
            <div>
              <h2>Let's talk about your website.</h2>
              <p className="sub">
                Tell me about your business and what you need. I'll reply and suggest the best next step.
              </p>
              <div className="cta">
                {whatsappUrl && (
                  <ExternalLink className="btn" href={whatsappUrl}>
                    Chat on WhatsApp
                  </ExternalLink>
                )}
                {emailUrl && (
                  <a className="btn outline" href={emailUrl}>
                    Send an email
                  </a>
                )}
                {socialLinks.map((s) => (
                  <ExternalLink key={s.label} className="btn outline" href={s.url}>
                    {s.label === 'GitHub' ? 'View GitHub' : `Follow on ${s.label}`}
                  </ExternalLink>
                ))}
              </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from the RAY DIGITAL website"
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="hp"
                aria-hidden="true"
              />

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone or WhatsApp</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label htmlFor="package">Package you're interested in</label>
                <select id="package" name="package" defaultValue="Not sure yet">
                  {packages.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Tell me about your project</label>
                <textarea id="message" name="message" rows="4" required />
              </div>

              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>

              <p className="form-msg" role="status" aria-live="polite">
                {status === 'success' && (
                  <>
                    <strong>Thank you for reaching out.</strong>
                    <br />
                    Your message has been sent successfully. I appreciate your interest in RAY DIGITAL and will get back to you as soon as possible.
                  </>
                )}
                {status === 'error' &&
                  'Sorry, the message did not send. Please try WhatsApp or email instead.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}