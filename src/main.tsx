import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Info from './Info.tsx'
import Links from './Links.tsx'
import Line from './Line.tsx'
import Knownas from './Knownas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Info />
    <Line />
    <Links />
    <Knownas />
  </StrictMode>
)
