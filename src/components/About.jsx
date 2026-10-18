import brand from '../config/brand';

const points = [
  { title: 'Credibility', text: 'A polished site shows customers you are serious.' },
  { title: 'Works on every phone', text: 'Most visitors browse on mobile, so I design for it first.' },
  { title: 'Clear information', text: 'Services, location and prices are easy to find.' },
  { title: 'Easy to reach you', text: 'One tap to call, message or email.' },
];

export default function About() {
  return (
    <section className="light" id="about">
      <div className="w about-grid">
        <div className="rv">
          <h2>A web developer in Nigeria who gets you online properly.</h2>
          <p>
            {brand.name} helps businesses build a professional online presence. No jargon and no bloated pages, just a site that is easy to use and easy to trust.
          </p>
        </div>
        <ul className="points rv">
          {points.map((p) => (
            <li key={p.title}>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}