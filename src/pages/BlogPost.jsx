import { useParams, Link, Navigate } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { blogPosts } from '../data/content'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === id)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <div className="page-header">
        <RevealSection as="h1">{post.title}</RevealSection>
        <RevealSection as="p">{post.date}</RevealSection>
      </div>

      <RevealSection className="blog-detail">
        <article className="blog-detail-card glass">
          <p>{post.excerpt}</p>

          {post.sections.map((section, i) => (
            <div key={i}>
              <h2>{section.heading}</h2>
              {section.text && <p>{section.text}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}

          {post.closing && <p>{post.closing}</p>}

          <div className="blog-detail-nav">
            <Link to="/blog" className="btn btn-outline">
              <i className="fas fa-arrow-left" /> Back to Blog
            </Link>
          </div>
        </article>
      </RevealSection>
    </>
  )
}
