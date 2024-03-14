import React from 'react'
import Navbar from '../Home/Navbar'
import ProductHome from './Producthome'
import './products.css'
import Cart from './Cart'
import Footer from '../Home/Footer'
import { CartProvider } from 'react-use-cart'


function Products() {
  const local_user = localStorage.getItem('user')
  const parsed_user = JSON.parse(local_user)
  let username = parsed_user.name
  let user_email = parsed_user.email

  return (
    <div className='products'>
      <Navbar/>
      <br /><br /><br />
      <CartProvider>
        <ProductHome/>
        <Cart username={username} user_email={user_email}/>
      </CartProvider>

      <Footer/>
    </div>
  )
}

export default Products
