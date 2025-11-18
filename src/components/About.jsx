import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function About() {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: cardRef.current, start: 'top 80%' } }
    )
  }, [])

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={cardRef} className="rounded-3xl border border-slate-300/50 bg-white/40 backdrop-blur-xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">About</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            “I’m a young web developer who loves creating clean, fast and interactive websites. I focus on smooth user experiences, simple layouts and steady improvement with every project. Building for the web keeps me learning, experimenting and growing every day.”
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
