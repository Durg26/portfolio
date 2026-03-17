import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import BgAnimation from './components/BgAnimation'
import Home from './pages/Home'
import Photography from './pages/Photography'
import Designs from './pages/Designs'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProjectDetail from './pages/ProjectDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <BgAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
