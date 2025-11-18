import { motion } from 'framer-motion'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'UI Styling and Layouts',
  'Basic Animations', 'Webflow', 'Version Control (Git and GitHub)', 'Basic API Integration',
  'Basic Backend Concepts', 'GSAP or animation libraries', 'Local Storage'
]

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03, type: 'spring', stiffness: 120 }}
              className="rounded-2xl border border-slate-300/60 bg-white/40 backdrop-blur-xl px-4 py-3 text-sm text-slate-800 shadow-[0_6px_24px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-transform"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
