import RevealSection from '../components/RevealSection'
import { designItems } from '../data/content'

export default function Designs() {
  return (
    <>
      <div className="page-header">
        <RevealSection as="h1">Designs</RevealSection>
        <RevealSection as="p">Creative work and visual projects</RevealSection>
      </div>

      <div className="designs-grid">
        {designItems.map((item, i) => (
          <RevealSection className="design-card glass" key={i}>
            <div className="design-img">
              <i className={`fas ${item.icon}`} />
            </div>
            <div className="design-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="design-tools">
                {item.tools.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </>
  )
}
