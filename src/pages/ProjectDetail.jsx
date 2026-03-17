import { useParams, Link, Navigate } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { projects } from '../data/content'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/#projects" replace />

  return (
    <>
      <div className="page-header">
        <RevealSection as="h1">{project.title}</RevealSection>
        <RevealSection as="p">{project.tags.join(' \u2022 ')}</RevealSection>
      </div>

      <RevealSection className="project-detail">
        <div className="project-detail-card glass">
          <div className="project-detail-img">
            <i className={`fas ${project.icon}`} />
          </div>
          <div className="project-detail-content">
            <h2>Overview</h2>
            <p>{project.overview}</p>

            <h2>My Role</h2>
            <p>{project.role}</p>

            <h2>Key Highlights</h2>
            <ul>
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>

            <h2>Skills Applied</h2>
            <div className="project-tags">
              {project.skills.map(s => <span key={s}>{s}</span>)}
            </div>

            <div className="project-detail-nav">
              <Link to="/#projects" className="btn btn-outline">
                <i className="fas fa-arrow-left" /> Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
