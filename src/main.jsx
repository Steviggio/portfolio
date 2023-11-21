import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProjectPage from './pages/Projects/ProjectPage.jsx'
import ProjectImgDiv from './components/ProjectElement/ProjectImgDiv.jsx'


const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
  },
  {
    path: '/portfolio/project-page',
    element: <ProjectPage name="Kasa" />
  },
  {
    path: "/portfolio/project-img",
    element: <ProjectImgDiv />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

