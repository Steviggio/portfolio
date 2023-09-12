import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './components/Body/Body.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/body" element={<Layout children={<Body />} />} />
      <Route path="/about" element={<Layout children={<About />} />} />
    </>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
