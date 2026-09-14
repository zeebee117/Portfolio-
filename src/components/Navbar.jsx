import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'AI + Content', href: '/#ai-content' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f8f6f2]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <Link to="/" className="text-sm font-semibold tracking-[0.25em] text-zinc-900">
          ZEE
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="text-sm text-zinc-700 transition hover:text-teal-700">
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 transition hover:border-teal-700 hover:text-teal-700"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-zinc-800 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-[#f8f6f2] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-zinc-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="#" className="text-sm font-medium text-zinc-900" onClick={() => setOpen(false)}>
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
