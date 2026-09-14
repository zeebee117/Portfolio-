import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const items = [
  {
    number: '01',
    title: 'Build',
    description: 'Full-stack applications, APIs, authentication, backend systems and responsive interfaces.',
    points: ['React', 'JavaScript', 'Node.js', 'Express', 'REST APIs', 'HTML/CSS', 'Tailwind'],
  },
  {
    number: '02',
    title: 'Think',
    description:
      'Breaking problems down, understanding product flows, debugging things that refuse to behave and making systems easier to use.',
    points: ['Architecture', 'UX thinking', 'Security', 'Problem solving', 'Debugging'],
  },
  {
    number: '03',
    title: 'Amplify',
    description: 'Using AI to accelerate research, development and product content without outsourcing the thinking.',
    points: ['AI workflows', 'Research', 'Prompt design', 'Product storytelling', 'SEO', 'Content systems'],
  },
]

export default function WhatIDo() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">What I actually like doing</h2>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">{item.number}</p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.points.map((point) => (
                <span key={point} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
                  {point}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  )
}
