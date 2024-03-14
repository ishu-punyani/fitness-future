import React from 'react'
import Navbar from './Navbar'
import Midsection from './Midsection'
import Footer from './Footer'
import './home.css'
import {Link } from 'react-router-dom'

function Home() {
    // console.log(localStorage.getItem('user'))
  return (
    // console.log(user)
    <div className='home-container'>
      <Navbar/>
      <Midsection/>
      <Footer/>
    </div>
  )
}

export default Home