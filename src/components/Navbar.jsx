import { useEffect, useState } from 'react';
import brand from '../config/brand';
import Logo from './Logo';

const links = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  // Close the menu with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Highlight the link of the section currently on screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="w bar">
        <a className="brand" href="#top" aria-label={`${brand.name} home`}>
          <Logo /> {brand.name}
        </a>
        <nav aria-label="Main">
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="menu" className={open ? 'open' : ''}>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'on' : ''}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn" href="#contact" onClick={() => setOpen(false)}>
                Let's talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}