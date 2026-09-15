import SectionReveal from './SectionReveal'

const links = [
  { label: 'Email', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Resume', href: '#' },
]

export default function Contact() {
  return (
    <SectionReveal id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">Let&apos;s build something interesting.</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">
          If you&apos;re working on something where engineering, AI and product thinking overlap, I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-teal-700 hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
