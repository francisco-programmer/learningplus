import React from 'react'
import Nav from '../Nav'
import Home from '../../pages/home/Home'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <Home />

    </div>
  )
}

export default Layout