import { whatsappUrl } from '../config/brand';
import ExternalLink from './ExternalLink';

// Floating chat button, bottom-right on every page.
export default function WhatsAppButton() {
  if (!whatsappUrl) return null;
  return (
    <ExternalLink className="wa-float" href={`${whatsappUrl}?text=${encodeURIComponent('Hi, I saw your website and I need a website for my business.')}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 3C6.5 3 2 7 2 12c0 1.9.6 3.700 1.700 5.100L2.800 21l4.100-1.100A10 10 0 0 0 12 21c5.500 0 10-4 10-9s-4.500-9-10-9z" />
      </svg>
      <span>Chat with me</span>
    </ExternalLink>
  );
}