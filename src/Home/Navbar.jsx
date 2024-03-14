import React from 'react'
import './Navbar.css'
import { useNavigate,Link } from 'react-router-dom'

function Navbar() {
  const local_user = localStorage.getItem('user')
  const parsed_user = JSON.parse(local_user)
  let name = parsed_user.name
  const navigate = useNavigate()
  const logout = () =>{
    console.log('logout')
    localStorage.removeItem('user')
    navigate('/')
    location.reload()
  }
  return (
    <div className="home-navbar">
        <div className="black-bar">
          <span>+91-729190XXXX</span>
          <span>Welcome to Fitness Future Gym.</span>
          <span>fitnessfuturegym@gmail.com</span>
        </div>

        <div className='navigation'>
          <div className='navigation-logo'>
            <Link to='/'>
            <img src="/fitness future logo.png" alt="Gym-logo" />
            </Link>
            <span className='home-welcome'>Hi {name}!</span>
          </div>
          <div className='anchor'>
            <span className='navbar-btn' onClick={()=>navigate('/')}>Home</span>
            <span className='navbar-btn' onClick={()=>navigate('/contact')}>Contact Us</span>
            <span className='navbar-btn' onClick={()=>navigate('/gallery')}>Gallery</span>
            <span className='navbar-btn' onClick={()=>navigate('/products')}>Products</span>
            <span className='navbar-btn' onClick={logout}>Logout</span>
          </div>
        </div>

        <div className="blue-line"></div>
        
      </div>

  )
}

export default Navbar
