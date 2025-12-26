import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('Iniciando aplicación...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('No se encontró el elemento root');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
