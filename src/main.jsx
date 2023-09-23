import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Body from './pages/Body/Body.jsx'
// import Header from './components/Layout/Header/Header.jsx'
// import Footer from './components/Layout/Footer/Footer.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './components/Layout/Layout.jsx'
// import Projects from './pages/Projects/Projects.jsx'
// import Hover from './components/Hover/Hover.jsx'
// import SkillsList from './components/SkillsList/SkillsList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/portfolio" element={<App />} />
    </>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
