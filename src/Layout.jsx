import React from 'react'
import { Outlet } from "react-router-dom"
import Nav from './components/Nav'
import { Footer } from './sections'
import { AuthProvider } from './context/AuthContext'


const Layout = () => {
  return (
    <>
    <AuthProvider>
    <Nav/>
    <Outlet/>
    <Footer/>
    </AuthProvider>
    </>
    

  )
}

export default Layout