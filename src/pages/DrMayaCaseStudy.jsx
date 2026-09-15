import CaseStudyLayout from '../layouts/CaseStudyLayout'

const sections = [
  {
    title: 'Problem',
    content: 'Create a therapy website that feels trustworthy, clear and easy to navigate across device sizes.',
  },
  {
    title: 'Approach',
    content: 'Prioritized conversion clarity with strong information hierarchy and focused user paths.',
  },
  {
    title: 'What I built',
    content: [
      'Responsive frontend using HTML5, Tailwind CSS and vanilla JavaScript',
      'Trust-oriented section structure and CTA placement',
      'FAQ and page flow designed for quick scanning',
    ],
  },
  {
    title: 'Design decisions',
    content: 'Used restrained visuals and clean spacing to keep attention on clarity and trust signals.' },
  {
    title: 'Responsive implementation',
    content: 'Ensured layouts and typography scaled cleanly across mobile, tablet and desktop breakpoints.' },
  {
    title: 'Content hierarchy',
    content: 'Organized therapeutic service context, trust elements, and calls to action for fast comprehension.' },
  {
    title: 'UX decisions',
    content: 'Focused on minimal friction navigation and conversion-oriented content order.' },
  {
    title: 'Challenges',
    content: 'Balancing calm visual tone with practical conversion behavior and clear communication.' },
  { title: 'Outcome / current state', content: 'A working responsive website built with vanilla JavaScript and Tailwind CSS.' },
  { title: 'AI usage', content: 'AI assisted brainstorming and review; implementation decisions remained human-owned.' },
  { title: 'Links', content: 'Project links can be added when available.' },
]

export default function DrMayaCaseStudy() {
  return (
    <CaseStudyLayout
      title="Dr. Maya"
      description="Responsive Therapy Website"
      role="Design, responsive frontend and UX structure"
      technologies={['HTML5', 'Tailwind CSS', 'JavaScript']}
      sections={sections}
      seoTitle="Dr. Maya Case Study | Zee"
      seoDescription="How Zee designed and built a responsive therapy website focused on trust and clarity."
    />
  )
}
