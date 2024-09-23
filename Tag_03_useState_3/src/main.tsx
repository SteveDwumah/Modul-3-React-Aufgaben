import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyForm from './components/InputForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyForm />
  </StrictMode>,
)
