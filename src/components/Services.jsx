const services = [
  {
    title: 'Business websites',
    text: 'Multi-page sites that present your services and make contact simple.',
    d: 'M10 9h28a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4zM6 17h36',
  },
  {
    title: 'Landing pages',
    text: 'One focused page built around a single goal: getting people to reach out.',
    d: 'M24 6l5 12 13 2-10 9 3 13-11-7-11 7 3-13L6 20l13-2z',
  },
  {
    title: 'Portfolio websites',
    text: 'Show your work and story in a clean, memorable personal site.',
    d: 'M24 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM9 40c2-9 9-13 15-13s13 4 15 13',
  },
  {
    title: 'Website redesigns',
    text: 'Refresh an outdated site so it looks current and works better.',
    d: 'M8 24a16 16 0 0 1 28-10l4 4M40 24a16 16 0 0 1-28 10l-4-4M40 8v10H30M8 40V30h10',
  },
  {
    title: 'Responsive design and UX',
    text: 'Layouts that stay clear and easy to use on any screen size.',
    d: 'M18 6h12a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4zM21 37h6',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="w">
        <h2 className="rv">Services</h2>
        <p className="sub rv">Focused work I can deliver well.</p>
        <div className="grid three">
          {services.map((s) => (
            <article className="card rv" key={s.title}>
              <svg className="icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                <path d={s.d} />
              </svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}