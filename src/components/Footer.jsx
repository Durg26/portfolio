import { personalInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <i className="fas fa-envelope" />
        </a>
      </div>
      <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
    </footer>
  )
}
