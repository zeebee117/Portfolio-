import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function CaseStudyLayout({
  title,
  description,
  role,
  technologies,
  sections,
  seoTitle,
  seoDescription,
}) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm text-zinc-600 hover:text-teal-700">
          ← Back to home
        </Link>
        <header className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">{description}</p>
          <p className="mt-4 text-sm font-medium text-zinc-900">Role: {role}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-zinc-900">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {section.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
