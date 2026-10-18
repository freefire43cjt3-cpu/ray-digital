import brand from '../config/brand';
import ExternalLink from './ExternalLink';

const projects = [
  {
    name: 'Platinum Farida',
    label: 'Meat delivery website',
    description:
      'A modern online experience for a meat delivery brand, designed to showcase products and make enquiries easy.',
    image: '/images/farida.jpeg',
    url: 'https://platinumfarida.com',
    type: 'website',
  },
  {
    name: 'SAVORÉ',
    label: 'Restaurant website',
    description:
      'A stylish restaurant website concept showcasing the dining experience, menu, and brand identity.',
    image: '/images/savore.jpeg',
    url: 'https://savore-grill-house.vercel.app/',
    type: 'website',
  },
  {
    name: 'Havenstone Estate',
    label: 'Real estate website',
    description:
      'A premium real estate website concept for showcasing properties, exploring listings, and making enquiries.',
    image: '/images/havestone.jpeg',
    url: 'https://havenstone-estate.vercel.app/',
    type: 'concept',
  },
];

export default function Projects() {
  return (
    <section id="work" className="dark-alt">
      <div className="w">
        <h2 className="rv">Selected work</h2>
        <p className="sub rv">
          Websites, creative concepts, and digital experiences by {brand.name}.
        </p>
        <div className="grid three">
          {projects.map((project) => (
            <article className="card rv" key={project.name}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.name} website preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                {/* {project.type === 'concept' && (
                  <span className="project-status"></span>
                )} */}
              </div>
              <span className="tag">{project.label}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.url ? (
                <ExternalLink className="proj-link" href={project.url}>
                  View project ↗
                </ExternalLink>
              ) : (
                <span className="proj-link project-coming-soon">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}