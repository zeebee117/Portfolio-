import About from '../components/About'
import AISection from '../components/AISection'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import Skills from '../components/Skills'
import WhatIDo from '../components/WhatIDo'
import Workflow from '../components/Workflow'

export default function Home() {
  return (
    <>
      <SEO
        title="Zee | AI Content & Growth Engineer"
        description="Personal developer portfolio for Zee — full-stack engineering, AI-assisted workflows, product thinking and content systems."
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <AISection />
        <Experience />
        <Skills />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
