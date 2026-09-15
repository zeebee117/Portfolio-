import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location])
}
