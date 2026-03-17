import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const close = useCallback(() => setMenuOpen(false), [])

  const isActive = (path) => {
    if (path.startsWith('#')) return pathname === '/' && hash === path
    return pathname === path
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={close}>AD</Link>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        <li><Link to="/" className={pathname === '/' && !hash ? 'active' : ''} onClick={close}>Home</Link></li>
        <li><a href="/#about" className={isActive('#about') ? 'active' : ''} onClick={close}>About</a></li>
        <li><a href="/#experience" className={isActive('#experience') ? 'active' : ''} onClick={close}>Experience</a></li>
        <li><a href="/#projects" className={isActive('#projects') ? 'active' : ''} onClick={close}>Projects</a></li>
        <li><Link to="/photography" className={pathname === '/photography' ? 'active' : ''} onClick={close}>Photography</Link></li>
        <li><Link to="/designs" className={pathname === '/designs' ? 'active' : ''} onClick={close}>Designs</Link></li>
        <li><Link to="/blog" className={pathname.startsWith('/blog') ? 'active' : ''} onClick={close}>Blog</Link></li>
        <li><a href="/#contact" className={isActive('#contact') ? 'active' : ''} onClick={close}>Contact</a></li>
      </ul>
      <div className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(o => !o)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}
