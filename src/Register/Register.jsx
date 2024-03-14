import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
    const [result,setResult] = useState("")
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repassword: ""
    })
    const handleChange = ((e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    })
    const register = ()=>{
        const {name,email,password,repassword} = user
        if(name && email && password && (password === repassword))
        {
            axios.post('https://fitness-future-backend.onrender.com/register', user)
            .then((res)=>{
                // console.log(res)
                if(res.data.message === 'User already exists.')
                {
                    setResult('User already exists.')
                }
                else if(res.data.message === 'successfully registered'){
                    setResult('User signed up successfully!')
                    navigate('/')
                }
            })
        } else if(password != repassword){
            setResult('Passwords do not match!')
        } else if(name ==="" || email === "" || password === "" || repassword === ""){
            setResult('Fields cannot be empty!')
        }
        setTimeout(()=>{
            setResult("")
        },3000)
    }
  return (
    <div className="register-body">
        <div className="welcome">
            <h1>Welcome to Fitness Future Gym.</h1>
        </div>
            <div className='register'>
                <div className="register-left">
                    <img id='register-img' src='/fitness future logo.png' alt="" />
                </div>

                <div className="register-right">
                    <h1>Sign Up</h1>
                    <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter name' />
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter email' />
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter password' />
                    <input type="password" name="repassword" value={user.repassword} onChange={handleChange} placeholder='Re-Enter password' />
                    <button className="register-btn" onClick={register}>Sign Up</button>
                    <span className='result'>{result}</span>
                    
                    <div>
                        <h3>Signed in? Go to</h3>
                        <button className='register-btn'onClick={()=>navigate('/')}>Login Page</button>
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default Register
