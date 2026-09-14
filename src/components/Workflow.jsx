import SectionReveal from './SectionReveal'

const steps = [
  'Ask why.',
  'Break it down.',
  'Build the first version.',
  'Find what is wrong.',
  'Fix it.',
  'Question whether it can be better.',
  'Repeat.',
]

export default function Workflow() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">My usual workflow</h2>
        <ol className="mt-6 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="text-base text-zinc-700">
              <span className="mr-2 font-semibold text-zinc-900">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-zinc-600">
          Yes, sometimes step 7 is unnecessary. No, I don&apos;t always listen to myself.
        </p>
      </div>
    </SectionReveal>
  )
}
