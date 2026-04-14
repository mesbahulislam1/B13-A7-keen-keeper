import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Root } from './Root.jsx'
import Context from './Context/Context.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Root}></RouterProvider>

      <ToastContainer position='top-center'/>
    </Context>
  </StrictMode>,
)
