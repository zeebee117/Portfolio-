import SectionReveal from './SectionReveal'

const facts = [
  { label: 'BTech CSE', value: 'GLS University' },
  { label: 'Diploma', value: 'Computer Engineering — LJ University' },
  { label: 'Focus', value: 'Full-stack + AI + Product' },
  { label: 'Long-term interest', value: 'Cybersecurity' },
]

export default function About() {
  return (
    <SectionReveal id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Okay, but who is Zee?</h2>
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-zinc-700 sm:text-lg">
        I&apos;m a computer science engineer who enjoys the part of building where technology, design and communication overlap.
      </p>
      <p className="mt-3 max-w-4xl text-base leading-relaxed text-zinc-700 sm:text-lg">
        I&apos;ve worked across full-stack applications, identity systems, AI-assisted development and product content.
      </p>
      <p className="mt-3 max-w-4xl text-base leading-relaxed text-zinc-700 sm:text-lg">
        I tend to ask a lot of &apos;why?&apos; and &apos;how?&apos; — especially when something doesn&apos;t work the way I think it should.
        That usually turns into debugging, redesigning, experimenting and occasionally rebuilding the thing entirely.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {facts.map((fact) => (
          <article key={fact.label} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">{fact.label}</p>
            <p className="mt-2 text-base font-medium text-zinc-900">{fact.value}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}
