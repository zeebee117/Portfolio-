import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const steps = ['SOURCE', 'KNOWLEDGE', 'RESEARCH', 'CONTENT', 'FACT CHECK', 'HUMAN REVIEW']

export default function AIContentSystem() {
  return (
    <>
      <SEO
        title="AI Content System | Zee"
        description="Preview of Zee's AI Content System for converting verified product knowledge into structured content."
      />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm text-zinc-600 hover:text-teal-700">
          ← Back to home
        </Link>
        <section className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8">
          <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">Coming soon</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">AI Content System</h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            A small working system that turns verified product knowledge into structured content while flagging claims that need review.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest text-zinc-600 sm:text-sm">
            {steps.map((step, idx) => (
              <div key={step} className="inline-flex items-center gap-2">
                <span>{step}</span>
                {idx < steps.length - 1 && <span>→</span>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
