import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ModalContent from './components/Modal/ModalContent.jsx'
import ProjectElement from './components/Projects/ProjectElement.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<App />} />
      <Route path="/portfolio/project-page" element={<ProjectPage />} />
      <Route path="/portfolio/modal" element={<ModalContent name={"Mon Vieux Grimoire"}/>} />
      <Route path="/portfolio/element" element={<ProjectElement />} />
    </>
  ))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

