import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useHashScroll } from './hooks/useHashScroll'
import AIContentSystem from './pages/AIContentSystem'
import DrMayaCaseStudy from './pages/DrMayaCaseStudy'
import Home from './pages/Home'
import LogbookCaseStudy from './pages/LogbookCaseStudy'
import PremjiGemsCaseStudy from './pages/PremjiGemsCaseStudy'
import ZidCaseStudy from './pages/ZidCaseStudy'

function ScrollManager() {
  useHashScroll()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/zid" element={<ZidCaseStudy />} />
        <Route path="/work/logbook360" element={<LogbookCaseStudy />} />
        <Route path="/work/dr-maya" element={<DrMayaCaseStudy />} />
        <Route path="/work/premji-gems" element={<PremjiGemsCaseStudy />} />
        <Route path="/ai-content-system" element={<AIContentSystem />} />
      </Routes>
    </BrowserRouter>
  )
}
