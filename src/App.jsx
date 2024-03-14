import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact Us'
import Gallery from './Gallery/Gallery'
import Login from './Login/Login'
import Register from './Register/Register'
import Products from './Products/Products'
import OrderPlaced from './Products/OrderPlaced'
import BMI from './Home/BMI'
import DietChart from './Home/DietChart'
import './global.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [user,setLoginUser] = useState({})
  // const [user,setLoginUser] = useState('')
  // const str = 'hello world'
  // localStorage.setItem('hello',str)
  // localStorage.removeItem('hello')
  // if(localStorage.getItem('hello'))
  // {
  //   console.log("user exists")
  // }
  // console.log(localStorage.getItem('hello'))
  // console.log(user)
  const local_user = localStorage.getItem('user')
  console.log(local_user)
  // let local_user_copy = local_user
  // let str_name = ''
  // let str_email = ''
  // if(local_user != null)
  // {
  //   const parsed_user = JSON.parse(local_user_copy)
  //   str_name = parsed_user.name
  //   str_email = parsed_user.email
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element = 
          {
            user ? 
            <Home setLoginUser={setLoginUser} name={user.name}/> : <Login setLoginUser={setLoginUser}/>
          }/> */}
          <Route exact path='/' element = 
          {
            local_user ? 
            <Home /> : <Login/>
          }/>
          <Route exact path='/gallery' element = 
          {
            local_user ? 
            <Gallery /> : <Login/>
          }/>
          <Route exact path='/contact' element = 
          {
            local_user ? 
            <Contact /> : <Login/>
          }/>
          <Route exact path='/products' element = 
          {
            local_user ? 
            <Products /> : <Login/>
          }/>
          <Route exact path='/bmi' element = 
          {
            local_user ? 
            <BMI /> : <Login/>
          }/>
          <Route exact path='/dietchart' element = 
          {
            local_user ? 
            <DietChart /> : <Login/>
          }/>
          <Route path='/order-placed' element = {<OrderPlaced />}/>
          {/* <Route path='/login' element = {<Login/>}/> */}
          <Route path='/register' element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
