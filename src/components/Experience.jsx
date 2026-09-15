import SectionReveal from './SectionReveal'

const timeline = [
  { title: 'BTech CSE', meta: 'GLS University' },
  { title: 'Diploma in Computer Engineering', meta: 'LJ University' },
  { title: 'Cybersecurity Hackathon', meta: 'Kand Shield — Final Round' },
  { title: 'Projects', meta: 'ZID · Dr. Maya · Premji Gems · LogBook360 Content System' },
]

export default function Experience() {
  return (
    <SectionReveal id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Where I&apos;ve been building</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {timeline.map((item) => (
          <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-700">{item.meta}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}
