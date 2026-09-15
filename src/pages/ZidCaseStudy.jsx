import CaseStudyLayout from '../layouts/CaseStudyLayout'

const sections = [
  { title: 'Problem', content: 'Build a zero-trust identity platform with verifiable credential workflows and secure verification paths.' },
  {
    title: 'Approach',
    content:
      'Designed modular identity and credential flows with clear role boundaries between issuer, verifier, authorities and users.',
  },
  {
    title: 'What I built',
    content: [
      'MetaMask signature login',
      'DID registration and approval',
      'Verifiable credential issuance',
      'Revocation and expiration checks',
      'Multi-authority credential approval',
      'Verifier validation workflows',
    ],
  },
  {
    title: 'Technical decisions',
    content: [
      'RSA-based signing for credentials',
      'SHA-256 hashing for integrity checks',
      'Blockchain anchoring for verification evidence',
      'Pinata IPFS for distributed storage support',
      'Security middleware for API protection',
    ],
  },
  {
    title: 'Architecture',
    content:
      'Separated client interactions, credential lifecycle APIs and verification layers to keep trust decisions explicit and auditable.',
  },
  {
    title: 'Security',
    content:
      'Focused on signed payload integrity, protected routes, credential validity checks and verification safeguards for zero-trust assumptions.',
  },
  {
    title: 'Challenges',
    content: 'Balancing strict security checks with usable workflows across multiple authorities and verifiers.' },
  {
    title: 'Outcome / current state',
    content: 'A working identity platform prototype centered on secure issuance and verification foundations.',
  },
  {
    title: 'AI usage',
    content: 'Used AI-assisted debugging and iteration support while keeping security architecture decisions human-reviewed.',
  },
  { title: 'Links', content: 'Case study and source links can be added here when ready.' },
]

export default function ZidCaseStudy() {
  return (
    <CaseStudyLayout
      title="ZID"
      description="Decentralized Identity & Verifiable Credential Platform"
      role="Primary technical contributor"
      technologies={['React', 'Node.js', 'Express', 'JWT', 'RSA', 'IPFS', 'Blockchain', 'Security']}
      sections={sections}
      seoTitle="ZID Case Study | Zee"
      seoDescription="How Zee built a decentralized identity and verifiable credential platform with security-first architecture."
    />
  )
}
