import CaseStudyLayout from '../layouts/CaseStudyLayout'

const sections = [
  {
    title: 'Problem',
    content: 'Support a jewellery brand with consistent AI-assisted creative concepts and content experiments.',
  },
  {
    title: 'Approach',
    content: 'Combined brand-aware prompting with visual experimentation and iterative creative direction.',
  },
  {
    title: 'Creative direction',
    content: 'Defined style lanes and campaign tones before generating assets to keep outcomes coherent.',
  },
  {
    title: 'AI workflow',
    content: 'Used structured prompting and iterative refinement loops to evolve visual outputs.' },
  {
    title: 'Visual experimentation',
    content: 'Tested multiple visual styles and compositions aligned to brand identity constraints.' },
  {
    title: 'Content adaptation',
    content: 'Reworked visual concepts for social content formats and different campaign contexts.' },
  {
    title: 'Challenges',
    content: 'Keeping visual consistency while exploring fast-moving creative iterations.' },
  {
    title: 'Outcome / current state',
    content: 'A practical AI-assisted process for visual ideation and social content support.',
  },
  {
    title: 'AI usage',
    content: 'AI was used for ideation speed and exploration while final direction stayed human-led.',
  },
  { title: 'Links', content: 'Portfolio links can be attached when ready.' },
]

export default function PremjiGemsCaseStudy() {
  return (
    <CaseStudyLayout
      title="Premji Gems"
      description="AI-assisted Creative Content"
      role="Prompting, visual ideation, creative direction and content adaptation"
      technologies={['AI', 'Visual Content', 'Creative Direction', 'Social Content']}
      sections={sections}
      seoTitle="Premji Gems Case Study | Zee"
      seoDescription="How Zee used AI-assisted creative workflows for visual content and direction experiments."
    />
  )
}
