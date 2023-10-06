import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ModalElement from './components/Modal/ModalElement.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<App />} />
      <Route path="/portfolio/project-page" element={<ProjectPage project="Kasa" />} />
      <Route path="/portfolio/modal" element={<ModalElement />} />
    </>
  ))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

