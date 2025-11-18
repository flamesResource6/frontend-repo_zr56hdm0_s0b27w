import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Expense Tracker Web App',
    desc: 'A clean, browser-based expense tracker that stores data using LocalStorage. It includes add and delete features, shows UI layout skills and basic JavaScript logic.',
    tags: ['LocalStorage', 'JavaScript', 'UI']
  },
  {
    title: 'Weather Forecast App',
    desc: 'Displays current weather, a 7-day forecast and a real-time clock. Uses APIs, responsive design and simple animations.',
    tags: ['API', 'Responsive', 'Animations']
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Projects</h2>
          <span className="text-slate-600 text-sm">More coming soon</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 120 }}
              className="group relative rounded-3xl border border-slate-300/60 bg-white/40 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -right-10 -top-10 w-56 h-56 bg-indigo-200/40 blur-3xl rounded-full" />
                <div className="absolute -left-10 -bottom-10 w-56 h-56 bg-sky-200/40 blur-3xl rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-700/90 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/60 border border-slate-300/60 text-slate-700 backdrop-blur-md">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
