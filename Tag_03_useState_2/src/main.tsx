import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DayNightSwitch from './components/Change.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DayNightSwitch />
  </StrictMode>,
)
