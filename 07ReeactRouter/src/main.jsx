import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
      <Route path = '/' element = {<Layout />}>
        <Route path ='' element = {<Home/>}/>
        <Route path ='about' element = {<About/>}>
        <Route path='company' element ={<About/>} />
        </Route>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
