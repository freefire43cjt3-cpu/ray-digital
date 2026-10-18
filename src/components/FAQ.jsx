// EDIT THIS LIST to change the questions and answers.
const faqs = [
  {
    q: 'Will my website work on phones?',
    a: 'Yes. Every package includes a mobile-friendly design, so your site looks right on phones, tablets and computers.',
  },
  {
    q: 'What does free support cover?',
    a: 'Starter includes 1 month of free support, Business includes 2 months, and Premium and E-commerce include 3 months.',
  },
  {
    q: 'Can you set up my domain and hosting?',
    a: 'Yes. Domain and hosting setup for 1 year is an add-on at ₦40,000.',
  },
  {
    q: 'Can customers pay on my website?',
    a: 'Yes. Payment gateway integration (for example Paystack or Flutterwave) is included in the E-commerce package, optional in Premium, and a ₦50,000 add-on for other packages.',
  },
  {
    q: 'Can I add more pages later?',
    a: 'Yes. Extra pages are ₦20,000 each.',
  },
  {
    q: 'Are the prices fixed?',
    a: 'The package prices are starting points. The final price depends on the size and complexity of your project, and I confirm it with you before we begin.',
  },
  {
    q: 'How do we get started?',
    a: 'Message me on WhatsApp and tell me about your business. We start with a short discovery chat about your goals, then move to design, development, review and launch.',
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="w">
        <h2 className="rv">Questions, answered</h2>
        <p className="sub rv">Quick answers before you get in touch.</p>
        <div className="faq rv">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}