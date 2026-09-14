import CaseStudyLayout from '../layouts/CaseStudyLayout'

const sections = [
  {
    title: 'Problem',
    content: 'Turn one SaaS product into a repeatable content engine instead of random one-off posts.',
  },
  {
    title: 'Research',
    content: 'Mapped target audience questions, product pain points and narrative angles before drafting any content.',
  },
  {
    title: 'Product understanding',
    content: 'Connected product capabilities to real user problems to avoid feature-only messaging.',
  },
  {
    title: 'Content strategy',
    content: 'Structured content from product insight to channel-specific formats for consistency and reuse.',
  },
  {
    title: 'Article',
    content: 'Built long-form narrative drafts aligned to product problem-solution framing.' },
  {
    title: 'LinkedIn',
    content: 'Adapted core narrative into platform-native professional post formats.' },
  {
    title: 'X thread',
    content: 'Converted ideas into short structured thread sequences with concise takeaway flow.' },
  {
    title: 'Fact-checking process',
    content: 'Flagged uncertain claims, verified sources and edited for factual clarity before finalization.' },
  {
    title: 'AI-assisted workflow',
    content: 'Used AI to accelerate ideation and structuring while keeping claims and judgment manually validated.' },
  {
    title: 'Outcome / current state',
    content: 'A working framework for Product → Problem → Story → Content → Distribution execution.',
  },
  { title: 'Links', content: 'Case study artifacts can be attached when publicly available.' },
]

export default function LogbookCaseStudy() {
  return (
    <CaseStudyLayout
      title="LogBook360"
      description="Product Content System"
      role="Product → Story → Distribution"
      technologies={['AI', 'Research', 'SEO', 'Product Content', 'Content Systems']}
      sections={sections}
      seoTitle="LogBook360 Case Study | Zee"
      seoDescription="How Zee structured AI-assisted product content workflows from research to distribution."
    />
  )
}
