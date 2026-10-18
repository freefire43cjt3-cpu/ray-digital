import { whatsappUrl } from '../config/brand';
import ExternalLink from './ExternalLink';

// EDIT THESE LISTS to change prices and features.
const plans = [
  {
    name: 'Starter',
    label: 'Basic business website',
    price: '₦150,000',
    note: 'Perfect for small businesses, brand owners and personal businesses.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact)',
      'Mobile-friendly design',
      'Contact form (email/WhatsApp)',
      'Basic SEO setup',
      '1 month free support',
    ],
  },
  {
    name: 'Business',
    label: 'Professional website',
    price: '₦250,000',
    note: 'Ideal for growing businesses that need more features and better visibility.',
    features: [
      'Up to 10 pages',
      'Modern and custom design',
      'Contact form (email/WhatsApp)',
      'Google Maps integration',
      'Basic SEO and speed optimization',
      'Social media links',
      '2 months free support',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    label: 'Advanced business website',
    price: '₦350,000',
    note: 'For established businesses and organizations that want more power and flexibility.',
    features: [
      'Up to 15 pages',
      'Custom design (unique layout)',
      'Booking / enquiry system',
      'Payment gateway integration (optional)',
      'Blog / news section',
      'Advanced SEO',
      '3 months free support',
    ],
  },
  {
    name: 'E-commerce',
    label: 'Online store website',
    price: '₦450,000+',
    note: 'For businesses that want to sell products or services online.',
    features: [
      'Up to 20 pages',
      'Full online store setup',
      'Payment gateway integration',
      'Product management system',
      'Order tracking (basic)',
      'Advanced SEO',
      '3 months free support',
    ],
  },
];

const addons = [
  { name: 'Extra page (each)', price: '₦20,000' },
  { name: 'Blog setup', price: '₦30,000' },
  { name: 'E-commerce integration', price: '₦80,000' },
  { name: 'Payment gateway (Paystack, Flutterwave)', price: '₦50,000' },
  { name: 'Domain and hosting setup (1 year)', price: '₦40,000' },
  { name: 'Website maintenance (monthly)', price: '₦15,000' },
  { name: 'Logo design (basic)', price: '₦25,000' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="dark-alt">
      <div className="w">
        <h2 className="rv">Website packages</h2>
        <p className="sub rv">Choose the plan that fits your needs.</p>

        <div className="plans">
          {plans.map((p) => {
            const href = whatsappUrl
              ? `${whatsappUrl}?text=${encodeURIComponent(`Hi, I'm interested in the ${p.name} package.`)}`
              : '#contact';
            const Cta = whatsappUrl ? ExternalLink : 'a';
            return (
              <article className={`plan rv${p.featured ? ' featured' : ''}`} key={p.name}>
                {p.featured && <span className="badge">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="plan-label">{p.label}</p>
                <div className="price">{p.price}</div>
                <p className="plan-note">{p.note}</p>
                <ul className="checks">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Cta className={`btn${p.featured ? '' : ' outline'}`} href={href}>
                  Get started
                </Cta>
              </article>
            );
          })}
        </div>

        <div className="addons rv">
          <h3>Add-on services</h3>
          <p className="plan-note">Extra features for your website.</p>
          <ul>
            {addons.map((a) => (
              <li key={a.name}>
                <span>{a.name}</span>
                <b>{a.price}</b>
              </li>
            ))}
          </ul>
          <p className="fine">Prices may vary depending on the project size, complexity and specific requirements. Let's discuss your needs.</p>
        </div>
      </div>
    </section>
  );
}