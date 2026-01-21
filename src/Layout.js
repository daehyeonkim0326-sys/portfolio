import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

const Layout = () => {
  return (
    <div id='layout'>
        <div className='header'>
            <Header/>
        </div>
        <div className='main'>
            <Main/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout