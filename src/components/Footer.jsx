export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Built by Zee.</p>
        <p>© 2026 Zee</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-teal-700">
            GitHub
          </a>
          <a href="#" className="transition hover:text-teal-700">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
