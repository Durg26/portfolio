import { useState, useCallback } from 'react'
import RevealSection from '../components/RevealSection'
import { galleryItems } from '../data/content'

export default function Photography() {
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const openLightbox = useCallback((item) => {
    setLightbox(item)
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <>
      <div className="page-header">
        <RevealSection as="h1">{`Photography`}</RevealSection>
        <RevealSection as="p">Capturing moments through my lens</RevealSection>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <RevealSection className="gallery-item" key={i} onClick={() => openLightbox(item)}>
            <div className="placeholder-gallery" style={{ height: item.height }}>
              <i className={`fas ${item.icon}`} />
            </div>
            <div className="gallery-overlay">
              <h4>{item.title}</h4>
              <p>{item.category}</p>
            </div>
          </RevealSection>
        ))}
      </div>

      {lightbox && (
        <div className={`lightbox active`} onClick={(e) => e.target.className.includes('lightbox') && closeLightbox()}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <i className={`fas ${lightbox.icon}`} style={{ fontSize: '6rem', marginBottom: '1rem' }} />
            <h3>{lightbox.title}</h3>
            <p>{lightbox.category}</p>
          </div>
        </div>
      )}
    </>
  )
}
