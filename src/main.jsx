import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Root } from './Root.jsx'
import Context from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Root}></RouterProvider>
    </Context>
  </StrictMode>,
)
