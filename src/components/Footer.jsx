import brand, { emailUrl, socialLinks } from '../config/brand';
import ExternalLink from './ExternalLink';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <Logo /> {brand.name}
            </a>
            <p>{brand.tagline}</p>
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul>
            {socialLinks.map((s) => (
              <li key={s.label}>
                <ExternalLink href={s.url}>{s.label}</ExternalLink>
              </li>
            ))}
            {emailUrl && (
              <li>
                <a href={emailUrl}>Email</a>
              </li>
            )}
          </ul>
        </div>
        <div className="copy">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}