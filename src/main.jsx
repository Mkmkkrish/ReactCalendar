import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Calendar.css'
import App from './Calendar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
