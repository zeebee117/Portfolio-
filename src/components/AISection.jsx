import SectionReveal from './SectionReveal'
import { Link } from 'react-router-dom'

const workflow = ['RESEARCH', 'STRUCTURE', 'GENERATE', 'VERIFY', 'EDIT', 'DISTRIBUTE']

const cards = [
  {
    title: 'Research',
    description: 'Use AI to accelerate exploration, then verify important claims against reliable sources.',
  },
  {
    title: 'Build',
    description:
      'Use ChatGPT and Copilot to accelerate implementation, debugging and iteration while keeping engineering decisions human-owned.',
  },
  {
    title: 'Create',
    description: 'Turn product knowledge into structured content instead of generating generic copy.',
  },
]

const systemFlow = ['SOURCE', 'KNOWLEDGE', 'RESEARCH', 'CONTENT', 'FACT CHECK', 'HUMAN REVIEW']

export default function AISection() {
  return (
    <SectionReveal id="ai-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">I don&apos;t use AI to skip thinking.</h2>
      <p className="mt-3 text-2xl leading-tight font-medium text-zinc-800 sm:text-3xl">
        I use it to increase the amount of thinking I can do.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest text-zinc-600 sm:text-sm">
        {workflow.map((step, idx) => (
          <div key={step} className="inline-flex items-center gap-2">
            <span>{step}</span>
            {idx < workflow.length - 1 && <span>↓</span>}
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-700">
        AI is useful when it accelerates the workflow. It becomes dangerous when it replaces judgment.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">{card.description}</p>
          </article>
        ))}
      </div>

      <article className="mt-10 rounded-3xl border border-teal-700/25 bg-teal-900/[0.03] p-6 sm:p-8">
        <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">Coming soon</p>
        <h3 className="mt-4 text-2xl font-semibold text-zinc-900">One more thing I&apos;m building.</h3>
        <h4 className="mt-2 text-xl font-medium text-zinc-800">AI Content System</h4>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          A small working system that turns verified product knowledge into structured content while flagging claims that need review.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest text-zinc-600 sm:text-sm">
          {systemFlow.map((step, idx) => (
            <div key={step} className="inline-flex items-center gap-2">
              <span>{step}</span>
              {idx < systemFlow.length - 1 && <span>→</span>}
            </div>
          ))}
        </div>
        <Link
          to="/ai-content-system"
          className="mt-6 inline-block text-sm font-medium text-zinc-900 transition hover:text-teal-700"
        >
          Explore the system →
        </Link>
      </article>
    </SectionReveal>
  )
}
