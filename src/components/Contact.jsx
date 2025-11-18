import { Mail, Phone, Instagram, Github } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Contact</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <a href="mailto:dakshis14exe@gmail.com" className="rounded-2xl border border-slate-300/60 bg-white/40 backdrop-blur-xl p-5 text-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all flex items-center gap-3">
            <Mail size={18} /> dakshis14exe@gmail.com
          </a>
          <a href="tel:+912231897672" className="rounded-2xl border border-slate-300/60 bg-white/40 backdrop-blur-xl p-5 text-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all flex items-center gap-3">
            <Phone size={18} /> +91 2231897672
          </a>
          <a href="https://instagram.com/him_coverse" target="_blank" className="rounded-2xl border border-slate-300/60 bg-white/40 backdrop-blur-xl p-5 text-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all flex items-center gap-3">
            <Instagram size={18} /> @him_coverse
          </a>
          <a href="#" className="rounded-2xl border border-slate-300/60 bg-white/40 backdrop-blur-xl p-5 text-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all flex items-center gap-3">
            <Github size={18} /> GitHub (coming soon)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
