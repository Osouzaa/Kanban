import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterApp } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterApp />
  </React.StrictMode>,
)
