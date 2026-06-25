import portfolio from "@/src/data/portfolio.json";

type SocialLink = {
  label: string;
  href?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function SocialButton({ item }: { item: SocialLink }) {
  const isReady = Boolean(item.href);
  const isExternal = item.href?.startsWith("http");

  if (!isReady) {
    return <span className="social-pill muted">{item.label}</span>;
  }

  return (
    <a
      className="social-pill"
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {item.label}
    </a>
  );
}

export default function Home() {
  const skillGroups = Object.entries(portfolio.skills);

  return (
    <main className="page-shell" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-intro">
            <img
              src={portfolio.basics.image}
              alt={`${portfolio.basics.name} profile`}
              className="profile-avatar"
            />
            <div>
              <h1>{portfolio.basics.name}</h1>
            </div>
          </div>
          <p className="hero-summary">{portfolio.summary}</p>

          <div className="hero-actions">
            {portfolio.socials.map((item) => (
              <SocialButton key={item.label} item={item} />
            ))}
          </div>

          <ul className="hero-meta">
            <li>{portfolio.basics.location}</li>
            <li>{portfolio.basics.phone}</li>
            <li>{portfolio.basics.email}</li>
          </ul>
        </div>

        <div className="hero-panel">
          <div className="panel-card spotlight">
            <span>Current Role</span>
            <h3>{portfolio.experience[0].role}</h3>
            <p>{portfolio.experience[0].company}</p>
            <strong>{portfolio.experience[0].period}</strong>
          </div>

          <div className="metrics-grid">
            {portfolio.highlights.map((highlight) => (
              <article className="panel-card metric" key={highlight.label}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-grid">
        <div className="content-main">
          <section className="section-block" id="experience">
            <SectionHeading
              eyebrow="Experience"
              title="Building enterprise systems with a backend-first mindset"
              description=""
            />

            <div className="timeline">
              {portfolio.experience.map((job) => (
                <article className="timeline-card" key={`${job.company}-${job.period}`}>
                  <div className="timeline-head">
                    <div>
                      <h3>{job.company}</h3>
                      <p>{job.role}</p>
                    </div>
                    <span>{job.period}</span>
                  </div>

                  <ul>
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="projects">
            <SectionHeading
              eyebrow="Projects"
              title="Projects"
              description=""
            />

            <div className="project-grid">
              {portfolio.projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-top">
                    <span>{project.category}</span>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Live Link
                      </a>
                    ) : (
                      <span className="link-muted">Add link</span>
                    )}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="freelance-projects">
            <SectionHeading
              eyebrow="Freelance"
              title="Independent client projects"
              description=""
            />

            <div className="project-grid">
              {portfolio.freelanceProjects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-top">
                    <span>{project.category}</span>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit Site
                    </a>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="content-side">
          <section className="section-block compact">
            <div className="sidebar-heading">
              <span className="eyebrow">Skills</span>
            </div>

            <div className="skills-stack">
              {skillGroups.map(([group, items]) => (
                <article className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block compact">
            <SectionHeading
              eyebrow="Education"
              title="Academic background"
              description="A clean structured list for degree details, GPA, and graduation period."
            />

            <div className="education-list">
              {portfolio.education.map((item) => (
                <article className="education-card" key={`${item.institute}-${item.period}`}>
                  <h3>{item.degree}</h3>
                  <p>{item.institute}</p>
                  <span>{item.period}</span>
                  <strong>{item.result}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block compact contact-card">
            <span className="eyebrow">Contact</span>
            <h2>Open to backend and full-stack opportunities</h2>
            <a
              href={portfolio.basics.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              WhatsApp
            </a>
            <a href={`mailto:${portfolio.basics.email}`} className="contact-link">
              {portfolio.basics.email}
            </a>
          </section>
        </aside>
      </section>

      <div className="floating-actions" aria-label="Quick actions">
        <a
          href={portfolio.basics.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="floating-action whatsapp-action"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/whatsapp-color-svgrepo-com.svg"
            alt=""
            className="floating-icon whatsapp-icon"
            aria-hidden="true"
          />
        </a>

        <a href="#top" className="floating-action top-action" aria-label="Back to top">
          <span className="floating-icon" aria-hidden="true">
            ↑
          </span>
        </a>
      </div>
    </main>
  );
}