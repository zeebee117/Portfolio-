import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionReveal from './SectionReveal'

export default function Projects() {
  return (
    <SectionReveal id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Things I&apos;ve actually built.</h2>
      <p className="mt-3 text-base text-zinc-700">A few projects that show how I think, build and experiment.</p>
      <div className="mt-8 grid gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionReveal>
  )
}
