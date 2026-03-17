import { Link } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <>
      <div className="page-header">
        <RevealSection as="h1">Blog</RevealSection>
        <RevealSection as="p">Thoughts, stories, and insights</RevealSection>
      </div>

      <div className="blog-list">
        {blogPosts.map(post => (
          <RevealSection as="article" className="blog-card glass" key={post.id}>
            <span className="blog-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More <i className="fas fa-arrow-right" />
            </Link>
          </RevealSection>
        ))}
      </div>
    </>
  )
}
