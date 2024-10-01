import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../exports'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}

export default Layout