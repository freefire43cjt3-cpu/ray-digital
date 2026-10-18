const stats = [
  { title: 'Responsive design', text: 'Looks right on any screen.' },
  { title: 'Fast loading', text: 'Pages that open quickly.' },
  { title: 'Secure and reliable', text: 'Built to stay up and stay safe.' },
  { title: 'SEO ready', text: 'Easier for customers to find you.' },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="w stats-grid">
        {stats.map((s) => (
          <div className="stat rv" key={s.title}>
            <b>{s.title}</b>
            <span>{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}