import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css'
import { router } from './router/Router.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ErrorBoundary>
  </StrictMode>,
)
