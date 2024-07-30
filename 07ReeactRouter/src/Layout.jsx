import React from 'react'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'




function Layout() {
  return (
    <>
    <Header/>
    < Outlet />
    <Footer/>
    </>
  )
}

export default Layout