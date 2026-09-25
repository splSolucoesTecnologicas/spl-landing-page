import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/landing-page.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento raiz do React não encontrado.')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
