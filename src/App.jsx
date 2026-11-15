import { useState } from 'react'
import { artworks, projects, assetUrl, previewUrl, email } from './content'
import ProjectDetails from './ProjectDetails'
import './App.css'

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3-.3 6-1.5 6-6a4.6 4.6 0 0 0-1-3c.3-1 .3-2 0-3 0 0-1 0-3 1a10 10 0 0 0-8 0C6 3 5 3 5 3c-.3 1-.3 2 0 3a4.6 4.6 0 0 0-1 3c0 4.5 3 5.7 6 6a3.5 3.5 0 0 0-1 3v4" /></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
    pen: <><path d="m14 3 7 7-11 11H3v-7Zm-8 9 6 6m-9 3 5-5m6-13-2 7 7-2" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function SectionTitle({ number, children }) {
  return <h2 className="section-title"><span className="section-number">{number}</span><span>{children}</span><span className="section-line" aria-hidden="true" /></h2>
}

const summaries = {
  playzone: 'An energetic digital playground. Bowling, virtual reality and karting, brought together with an interactive visit planner.',
  brew: 'A slower pace, a warmer experience. A coffee-house concept with an interactive menu and a carefully crafted visual identity.',
  fashion: 'A fresh perspective on fashion. An editorial shopping concept with curated collections, product discovery and saved favourites.',
}
const tags = {
  playzone: ['Interactive experiences', 'Visit planner', 'Responsive design'],
  brew: ['Brand concept', 'Interactive menu', 'Visual storytelling'],
  fashion: ['Fashion discovery', 'Product catalogue', 'Editorial design'],
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllArt, setShowAllArt] = useState(false)
  const navigation = [['01', 'About', 'about'], ['02', 'Projects', 'work'], ['03', 'Design', 'design'], ['04', 'Services', 'services']]
  return (
    <>
      <a className="skip-link" href="#home">Skip to content</a>
      <header className="header">
        <a className="logo" href="#home" aria-label="Zura home">z<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav id="main-nav" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([number, label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>{number}.</span> {label}</a>)}
          <a className="button nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Icon name="arrow" size={14} /></a>
        </nav>
      </header>
      <aside className="side-social" aria-label="Social links"><a href="https://github.com/zurakhubua9-ops" target="_blank" rel="noreferrer" aria-label="Zura on GitHub"><Icon name="github" size={21} /></a><a href={`mailto:${email}`} aria-label="Email Zura"><Icon name="mail" size={20} /></a><span /></aside>
      <aside className="side-email"><a href={`mailto:${email}`}>{email}</a><span /></aside>
      <main id="home" tabIndex={-1}>
        <section className="hero page-width" aria-labelledby="hero-heading">
          <p className="eyebrow">Hi, my name is</p>
          <h1 id="hero-heading">Zura Khubua<span>.</span></h1>
          <p className="hero-statement">I design. I build.<br />I bring ideas to life.</p>
          <p className="hero-description">I’m a graphic designer & front-end developer.<br className="desktop-break" /> Bringing a designer’s eye to the web — through thoughtful<br className="desktop-break" /> visuals, clean interfaces and meaningful details.</p>
          <div className="hero-actions"><a className="button" href="#work">Explore my work <Icon name="arrow" /></a><a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a></div>
          <div className="hero-bottom"><span>DESIGN + DEVELOPMENT</span><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="about-section page-width section" id="about">
          <SectionTitle number="01">A little about me</SectionTitle>
          <div className="about-layout">
            <div className="about-copy"><h3>Two disciplines.<br /><span>One creative mindset.</span></h3><p>Hello! I’m Zura. I enjoy turning an idea into something you can see, use and remember.</p><p>My work lives between graphic design and front-end development. From a bold poster to a thoughtful website, I care about how every detail looks and feels.</p><p className="tools-intro">A few things I work with:</p><ul className="skills">{['JavaScript', 'React', 'HTML & CSS', 'Responsive design', 'Graphic design', 'Visual composition'].map(skill => <li key={skill}>{skill}</li>)}</ul></div>
            <div className="creative-visual" aria-hidden="true"><div className="visual-orbit" /><div className="figure-head" /><div className="figure-body" /><div className="figure-leg leg-left" /><div className="figure-leg leg-right" /><div className="code-window"><div className="window-bar"><i /><i /><i /><span>ideas.jsx</span><Icon name="code" size={14} /></div><div className="code-lines"><span className="line-no">01</span><code><b>const</b> creative = {'{'}</code><span className="line-no">02</span><code>  name: <em>'Zura'</em>,</code><span className="line-no">03</span><code>  focus: [<em>'design'</em>, <em>'code'</em>],</code><span className="line-no">04</span><code>  details: <b>'make them count'</b></code><span className="line-no">05</span><code>{'}'};</code></div><div className="code-status"><span /> Bringing ideas to life</div></div><div className="figure-hand" /><span className="visual-caption">A LITTLE DESIGN. A LITTLE CODE.</span></div>
          </div>
        </section>

        <section className="work-section page-width section" id="work">
          <SectionTitle number="02">Some things I’ve built</SectionTitle>
          <div className="featured-list">{projects.map((project, index) => <article className={`featured-project ${index % 2 ? 'reverse' : ''}`} key={project.id}>
            <button className="project-visual" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title} project details`}><span className="browser-bar"><span className="browser-dots">● ● ●</span><span>{project.liveUrl.replace('https://', '')}</span><Icon name="arrow" size={13} /></span><img src={assetUrl(project.image)} alt={`${project.title} website homepage`} loading="lazy" width="1440" height="960" /><span className="preview-hint">Explore the project <Icon name="arrow" size={15} /></span></button>
            <div className="project-copy"><p className="eyebrow">Featured project / 0{index + 1}</p><h3>{project.title === 'BREWCOFFEESHOP' ? 'BREW Coffee House' : project.title}</h3><div className="project-description"><p>{summaries[project.id]}</p></div><ul className="project-tags">{tags[project.id].map(tag => <li key={tag}>{tag}</li>)}</ul><div className="project-links"><a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source on GitHub`}><Icon name="github" size={16} /> GitHub</a><a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website`}>Live website <Icon name="arrow" size={16} /></a><button onClick={() => setSelectedProject(project)} aria-label={`Read ${project.title} project details`}>Details +</button></div></div>
          </article>)}</div>
          <p className="projects-note">Independent portfolio concepts. Built to explore design and interaction.</p>
        </section>

        <section className="gallery-section page-width section" id="design"><SectionTitle number="03">Beyond the browser</SectionTitle><div className="gallery-intro"><h3>A selection of<br /><span>visual experiments.</span></h3><p>Posters, product visuals and expressive compositions.<br />A different canvas. The same attention to detail.</p></div><div className="artwork-grid">{(showAllArt ? artworks : artworks.slice(0, 6)).map(artwork => <figure className="artwork-card" key={artwork.id}><a href={assetUrl(artwork.image)} target="_blank" rel="noreferrer" aria-label={`Open ${artwork.title} full size`}><img src={previewUrl(artwork.image)} alt={`${artwork.title} — graphic design by Zura`} loading="lazy" /><span className="artwork-arrow"><Icon name="arrow" /></span></a><figcaption><span>{artwork.title}</span><span>{artwork.id} / GRAPHIC DESIGN</span></figcaption></figure>)}</div><button className="button gallery-more" aria-expanded={showAllArt} onClick={() => setShowAllArt(!showAllArt)}>{showAllArt ? 'Show fewer designs −' : 'View all 10 designs +'}</button></section>

        <section className="services-section page-width section" id="services"><SectionTitle number="04">What I can help with</SectionTitle><div className="services-grid"><article><div className="service-icon"><Icon name="pen" size={25} /></div><p className="eyebrow">DESIGN</p><h3>A distinctive<br />visual presence.</h3><p>Posters, social media visuals and digital graphics that turn your ideas into a clear, memorable visual story.</p><div className="service-tags">Posters <span>/</span> Campaign visuals <span>/</span> Digital graphics</div></article><article><div className="service-icon"><Icon name="code" size={25} /></div><p className="eyebrow">DEVELOPMENT</p><h3>A thoughtful<br />web experience.</h3><p>Responsive websites that feel as good as they look. Clear layouts, considered interactions and attention to every screen size.</p><div className="service-tags">Websites <span>/</span> Responsive layouts <span>/</span> React</div></article></div></section>

        <section className="contact-section page-width section" id="contact"><SectionTitle number="05">What’s next?</SectionTitle><div className="contact-content"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s make<br /><span>something great.</span></h2><p>Have a project, a collaboration or just a hello?<br />I’d love to hear what you’re thinking.</p><a className="button contact-button" href={`mailto:${email}`}><Icon name="mail" /> Get in touch <Icon name="arrow" /></a><a className="contact-address" href={`mailto:${email}`}>{email}</a><a className="contact-github" href="https://github.com/zurakhubua9-ops" target="_blank" rel="noreferrer" aria-label="Zura on GitHub"><Icon name="github" size={22} /></a></div></section>
      </main>
      <footer className="footer page-width"><a className="logo" href="#home" aria-label="Zura home">z<span>.</span></a><p>Designed & built by Zura Khubua <span>© {new Date().getFullYear()}</span></p><a href="#home" className="text-link">Back to top ↑</a></footer>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  )
}
