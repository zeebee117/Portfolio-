import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'

const labels = ['BUILD', 'THINK', 'CREATE', 'ITERATE']

export default function Hero() {
  return (
    <SectionReveal id="top" className="mx-auto grid max-w-6xl gap-10 px-4 pt-16 pb-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:pt-20">
      <div>
        <p className="mb-3 text-base text-zinc-700">Hey, I'm Zee.</p>
        <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          I build things.
          <br />
          Then I figure out how to make them better.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
          Computer Science engineer focused on full-stack development, AI-assisted workflows, product thinking and content.
        </p>
        <p className="mt-3 text-sm text-zinc-600">Usually asking &apos;why?&apos; and &apos;how?&apos; until something finally makes sense.</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/#work"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            Explore my work
          </Link>
          <Link
            to="/#contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-teal-700 hover:text-teal-700"
          >
            Let&apos;s talk
          </Link>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600">
          <span className="h-2 w-2 rounded-full bg-teal-700" /> Open to opportunities
        </p>
      </div>

      <motion.div
        className="relative mx-auto grid h-fit w-full max-w-sm grid-cols-2 gap-3 self-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        {labels.map((label, idx) => (
          <motion.div
            key={label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-center text-sm font-semibold tracking-widest text-zinc-800 shadow-sm"
            animate={{ y: [0, idx % 2 === 0 ? -4 : 4, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
          >
            {label}
          </motion.div>
        ))}
      </motion.div>
    </SectionReveal>
  )
}
