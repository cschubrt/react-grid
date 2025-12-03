import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PopProvider} from "./components/pop/PopContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopProvider>
      <App />
    </PopProvider>
  </StrictMode>,
)
