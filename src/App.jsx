import React from 'react'
import './index.css'
import Header from './Components/Header'

import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'






const AppLayout= () => {
  return(
    <>
     <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
   


export default AppLayout





