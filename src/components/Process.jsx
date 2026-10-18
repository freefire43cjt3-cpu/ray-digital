const steps = [
  { title: 'Discover', text: 'I learn about your business and goals.' },
  { title: 'Plan', text: 'We agree on the structure and design.' },
  { title: 'Build and test', text: 'I build it and check it on real devices.' },
  { title: 'Launch', text: 'We go live and I hand it over as agreed.' },
];

export default function Process() {
  return (
    <section id="process">
      <div className="w">
        <h2 className="rv">How we'll work together</h2>
        <p className="sub rv">Four steps, no surprises.</p>
        <ol className="steps rv">
          {steps.map((s) => (
            <li key={s.title}>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}