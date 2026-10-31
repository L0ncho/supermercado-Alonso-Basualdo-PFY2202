import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import InventarioProvider from './context/InventarioProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <InventarioProvider>
        <App />
      </InventarioProvider>
    </BrowserRouter>
  </StrictMode>,
)