import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './pages/Body/Body.jsx'
import Header from './components/Layout/Header/Header.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Tiles from './components/Tiles/Tiles.jsx'
import Projects from './pages/Projects/Projects.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/body" element={<Layout children={<Body />} />} />
      <Route path="/about" element={<Layout children={<About />} />} />
      <Route path="/tiles" element={<Tiles />} />
      <Route path="/projects" element={<Projects />} />
    </>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
