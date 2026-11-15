import { useState } from 'react'
import { artworks, projects, assetUrl, previewUrl, email } from './content'
import ProjectDetails from './ProjectDetails'
import './App.css'

function App() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <a className="skip-link" href="#home">Skip to content</a>
      <header className="header">
        <a className="logo" href="#home">
          ZURA<span>.</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a><a href="#services">Services</a>
          <a href="#contact">Contact ↗</a>
        </nav>
      </header>

      <main id="home" tabIndex={-1}>
        <section className="hero">
          <p className="hero-label">
            GRAPHIC DESIGNER & FRONT-END DEVELOPER
          </p>

          <h1 className="hero-title">
            DESIGNING
            <br />
            IDEAS. BUILDING
            <br />
            <span>EXPERIENCES.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              I’m Zura. I bring visual design and code together
              to create distinctive digital experiences.
            </p>

            <a className="work-button" href="#work">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <h2>
              Selected Work<span>.</span>
            </h2>
            <p>{filter === 'Design' ? 'GRAPHIC DESIGN / 01–10' : 'WEB DEVELOPMENT / 01–03'}</p>
          </div>

          <div className="work-filters" role="group" aria-label="Filter selected work">
            {['All', 'Development', 'Design'].map((category) => (
              <button
                key={category}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">
            {filter === 'All' ? 'Showing web projects and graphic design' : `Showing ${filter} projects`}
          </p>
          {filter !== 'Design' && (
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <button
                    className="project-open"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} project details`}
                  >
                    {project.image ? (
                      <span className="project-preview">
                        <img src={assetUrl(project.image)} alt={`${project.title} website homepage`} loading="lazy" />
                      </span>
                    ) : (
                      <span className={`project-cover cover-${project.theme}`}>
                        <span>{project.category}</span>
                        <strong>{project.title}</strong>
                        <small>Website preview coming soon</small>
                      </span>
                    )}
                    <span className="project-name">{project.title} ↗</span>
                  </button>
                  <p>{project.category}</p><a className="source-link live-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit website ↗</a>
                  {project.sourceUrl && (
                    <a className="source-link" href={project.sourceUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        {filter !== 'Development' && (
        <section className="gallery-section" id="design">
          <div className="gallery-heading">
            <p className="section-label">GRAPHIC DESIGN</p>
            <h2>
              The visual collection<span>.</span>
            </h2>
          </div>

          <div className="artwork-grid">
            {artworks.map((artwork) => (
              <figure className="artwork-card" key={artwork.id}>
                <a
                  className="artwork-link"
                  href={assetUrl(artwork.image)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${artwork.title} full size`}
                >
                  <img
                    src={previewUrl(artwork.image)}
                    alt={`${artwork.title} — graphic design by Zura`}
                    loading="lazy"
                  />
                </a>

                <figcaption>
                  <span>{artwork.title}</span>
                  <span>{artwork.id}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        )}

        <section className="about-section" id="about">
          <p className="section-label">ABOUT ME</p>

          <div className="about-content">
            <h2>
              A designer’s eye.
              <br />
              A developer’s <span>mindset.</span>
            </h2>

            <div className="about-text">
              <p>
                I’m Zura, a graphic designer and front-end developer.
                I bring visual design and code together to create
                thoughtful digital experiences.
              </p>

              <p>
                My work spans graphic design and websites —
                from expressive visuals to responsive layouts.
              </p>

              <div className="skill-tags">
                <span>Graphic Design</span>
                <span>HTML & CSS</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <p className="section-label">SERVICES</p>

          <h2>
            What I can <span>bring.</span>
          </h2>

          <div className="services-list">
            <article className="service-item">
              <span className="service-number">01</span>

              <div>
                <h3>Graphic Design</h3>
                <p>
                  Posters, social media visuals, and digital graphics
                  that give your ideas a distinctive look.
                </p>
              </div>

              <span className="service-symbol" aria-hidden="true">
                ↗
              </span>
            </article>

            <article className="service-item">
              <span className="service-number">02</span>

              <div>
                <h3>Front-End Development</h3>
                <p>
                  Responsive websites with clear layouts and
                  thoughtful interactions across screen sizes.
                </p>
              </div>

              <span className="service-symbol" aria-hidden="true">
                ↗
              </span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">CONTACT</p>

          <h2>
            Have a project
            <br />
            in <span>mind?</span>
          </h2>

          <p className="contact-description">
            Let’s talk about your idea and create something together.
          </p>

          <a className="contact-email" href={`mailto:${email}`}>
            {email}<span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">Opens your email app so you can write and send a message.</p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          ZURA<span>.</span>
        </a>

        <p>© {new Date().getFullYear()} ZURA</p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}

export default App
