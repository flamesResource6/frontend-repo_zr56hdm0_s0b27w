import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Hero() {
  const titleRef = useRef(null)
  const tagRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(cardRef.current, { y: 30, opacity: 0, duration: 0.8 })
      .from(titleRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(tagRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80 backdrop-blur-[2px]" />
      </div>

      <div ref={cardRef} className="relative z-10 w-full max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-slate-300/40 bg-white/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-slate-700/70 text-sm px-4 py-1.5 rounded-full bg-white/50 border border-slate-300/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </span>
          <h1 ref={titleRef} className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Daksh Acharekar
          </h1>
          <p ref={tagRef} className="mt-4 text-slate-700/80 text-lg sm:text-xl">
            From gamer to coder creating the future online
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[600px] h-[600px] bg-sky-200/40 blur-3xl rounded-full" />
        <div className="absolute left-1/3 bottom-10 w-[400px] h-[400px] bg-indigo-200/40 blur-3xl rounded-full" />
      </div>
    </section>
  )
}

export default Hero
