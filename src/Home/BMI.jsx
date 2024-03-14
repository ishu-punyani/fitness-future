import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './bmi.css'

function BMI() {
    const [form,setForm] = useState({
      height: '',
      weight: ''
    })
    
    const handleChange = (e) =>{
      console.log(form)
      const {name,value} = e.target
      setForm({
        ...form,
        [name] : value
      })
    }

    const [bmi,setBmi] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(form)
      const {height,weight} = form
      let calcbmi = ((weight * 2.2) / (height*height) * 703)
      setBmi(calcbmi)
      if(calcbmi < 18.5)
        setMessage('You are Underweight')
      else if(calcbmi >= 18.5 && calcbmi < 25)
        setMessage('You are Normal')
      else if(calcbmi > 25)
        setMessage('You are Overweight')
    }

    const refresh = () =>{
      setBmi('-')
      setMessage('')
      setForm({
        height : '',
        weight : ''
      })
    }
  return (
    <>
      <Navbar/>
      
        <div className='bmi'>
        {/* <br /> <br /> */}
            <div className="bmi-calc">
              <h1>BMI Calculator</h1>
              <form action="" onSubmit={handleSubmit} className='bmi-form'>
                <input className='bmi-inp' type="number" name='height' placeholder='Enter Height(in inches)' value={form.height} onChange={handleChange}/>
                <input className='bmi-inp' type="number" name='weight' placeholder='Enter Weight(in kgs)' value={form.weight} onChange={handleChange}/>
                <button className='btn btn-primary' type='submit'>Calculate BMI</button>
                <button className='btn btn-danger' type='submit' onClick={refresh}>Refresh</button>
                <div className="bmi-result">
                  <h3>Your BMI is: {bmi}</h3>
                  <p>{message}</p>
                </div>
              </form>
            </div>
        </div>

      <Footer/>
    </>
  )
}

export default BMI