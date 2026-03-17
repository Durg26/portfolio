import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import RevealSection from '../components/RevealSection'
import TypeWriter from '../components/TypeWriter'
import { personalInfo, experiences, projects } from '../data/content'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <RevealSection>
          <p className="hero-greeting">WELCOME TO MY WORLD</p>
          <h1 className="hero-name">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <p className="hero-subtitle">
            <TypeWriter words={personalInfo.roles} />
          </p>
          <p className="hero-description">{personalInfo.description}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <RevealSection>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me</p>
      </RevealSection>
      <div className="about-container">
        <RevealSection className="about-image">
          <div className="placeholder-img"><i className="fas fa-user" /></div>
        </RevealSection>
        <RevealSection className="about-text">
          <h3>{personalInfo.aboutTitle}</h3>
          {personalInfo.aboutText.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-tags">
            {personalInfo.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

function Experience() {
  const flowLineRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const line = flowLineRef.current
    if (!section || !line) return

    let ticking = false
    const update = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.top < vh && rect.bottom > 0) {
        const progress = Math.min((vh - rect.top) / section.offsetHeight, 1)
        line.style.height = `${progress * 100}%`
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience">
      <RevealSection>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My journey so far</p>
      </RevealSection>
      <div className="experience-flow" ref={sectionRef}>
        <div className="flow-line" />
        <div className="flow-line-progress" ref={flowLineRef} />
        {experiences.map((exp, i) => (
          <RevealSection className="flow-item" key={i}>
            <div className="flow-dot" />
            <div className="flow-card glass">
              <span className="flow-date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <RevealSection>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've worked on</p>
      </RevealSection>
      <div className="projects-grid">
        {projects.map(p => (
          <RevealSection className="project-card glass" key={p.id}>
            <div className="project-img"><i className={`fas ${p.icon}`} /></div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <Link to={`/project/${p.id}`}>
                  <i className="fas fa-external-link-alt" /> View Details
                </Link>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <RevealSection>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's connect and create something great</p>
      </RevealSection>
      <div className="contact-container">
        <RevealSection className="contact-card glass">
          <h3>Let's Connect</h3>
          <p>I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!</p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <i className="fas fa-envelope" /> {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <i className="fab fa-linkedin-in" /> LinkedIn Profile
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
