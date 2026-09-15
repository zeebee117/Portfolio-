import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">Project {project.number}</p>
          <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-zinc-700">{project.description}</p>
      <p className="mt-4 text-sm font-medium text-zinc-800">{project.role}</p>

      {project.flow && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-600">
          {project.flow.map((step, idx) => (
            <div key={step} className="inline-flex items-center gap-2">
              <span>{step}</span>
              {idx < project.flow.length - 1 && <span>↓</span>}
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={project.route}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition group-hover:text-teal-700"
      >
        View case study <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  )
}
