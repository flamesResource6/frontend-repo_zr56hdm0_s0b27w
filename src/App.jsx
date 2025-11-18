import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 selection:bg-sky-200 selection:text-slate-900">
      <Cursor />
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-xl px-4 py-2">
            <div className="font-semibold">DA</div>
            <nav className="hidden sm:flex gap-4 text-sm text-slate-700">
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#skills" className="hover:text-slate-900">Skills</a>
              <a href="#projects" className="hover:text-slate-900">Projects</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <a href="mailto:dakshis14exe@gmail.com" className="text-sm px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800">Contact</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Daksh Acharekar. All rights reserved.
      </footer>
    </div>
  )
}

export default App
