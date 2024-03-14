import React, { useState } from 'react'
import './contact.css'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import axios from 'axios'

function Contact() {

  const [result,setResult] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    preference: ""
  })
  const handleChange = ((e)=>{
    console.log(form)
    const {name,value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    const {name , email , contact , gender , age,height,weight,preference} = form
    if(name && email && contact && gender && age && height && weight && preference)
    {
      axios.post('https://fitness-future-backend.onrender.com/contact', form)
      .then((res)=>{
        console.log(res)
        setForm({
          name: "",
          email: "",
          contact: "",
          gender: "",
          age: "",
          height: "",
          weight: "",
          preference: ""
        })
        setResult("Form Submitted Successfully! We will connect with you soon...")
        setTimeout(()=>{
        setResult("")
      },3000)
      })
    } else if(name === "" || email === "" || contact === "" || gender === "" || age === "" || height === "" || weight === "" || preference === ""){
        setResult('Fields cannot be empty!')
        setTimeout(()=>{
        setResult("")
      },3000)
    }
    
  }

  return (
    <>
    <Navbar/>
    
    <div className='contact'>
      <div className='contact-left'>
        <span>Get in Touch With Us</span>
      </div>


      <div className="contact-right">

        {/* <div className='contact-right-content'> */}
          <form action="/contact" method='post' onSubmit={handleSubmit}>
            <input className='inp' type="text" placeholder='Enter Name' name='name' value={form.name} onChange={handleChange}/>
            <input className='inp' type="text" placeholder='Enter Email' name='email' value={form.email} onChange={handleChange}/> 
            <input className='inp' type="text" placeholder='Enter Contact' name='contact' value={form.contact} onChange={handleChange}/> 
            <label htmlFor="gender">
              <input className='radio-btn' type="radio" name='gender' value='Male' onChange={handleChange}/> <span>Male</span>
            </label>
            <label htmlFor="gender">
              <input className='radio-btn' type="radio" name='gender' value='Female' onChange={handleChange}/> <span>Female</span>
            </label>  
            <input className='inp' type="number" min='16' placeholder='Enter Age' name='age' value={form.age} onChange={handleChange}/> 
            <input className='inp' type="number" min='120' placeholder='Enter Height(in cm)' name='height' value={form.height} onChange={handleChange}/>
            <input className='inp' type="number" min='40' placeholder='Enter Weight(in kg)' name='weight' value={form.weight} onChange={handleChange}/>
            <label htmlFor="preference">
              <input className='radio-btn' type="radio" name='preference' value='Weight-Gain' onChange={handleChange}/> <span>Weight Gain</span>
            </label>
            <label htmlFor="preference">
              <input className='radio-btn' type="radio" name='preference' value='Weight-Loss' onChange={handleChange}/> <span>Weight Loss</span>
            </label>
            <label htmlFor="preference">
              <input className='radio-btn' type="radio" name='preference' value='Stay-Fit' onChange={handleChange}/> <span>Stay Fit</span>
            </label> 
            <button id='btn' type='submit'>Submit</button>
            <span >
              {result}
            </span>
          </form>
          </div>
      {/* </div> */}  
    </div>

    <Footer/>
    </>
      
  )
}

export default Contact