import { skillGroups } from '../data/skills'
import SectionReveal from './SectionReveal'

export default function Skills() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Skills</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 sm:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}
