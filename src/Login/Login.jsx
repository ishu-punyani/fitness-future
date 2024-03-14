import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'

function Login( {setLoginUser} ) {
    const [result,setResult] = useState("")
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = ((e)=>{
        
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    })
    const login = ()=>{
        axios.post('https://fitness-future-backend.onrender.com/login', user)
        .then((res)=>{
            // console.log(res)
            // console.log(res.data.user)
            // console.log(res.data.message)
            if(res.data.message === 'Login Successful')
            {
                const user_obj = res.data.user
                // console.log(user_obj)
                const user_str = JSON.stringify(user_obj)
                localStorage.setItem('user',user_str)
                const get_user = localStorage.getItem('user')
                // console.log(get_user)
                // setLoginUser(user_str)
                console.log(get_user)
                // setName(res.data.user.name)
                // setResult("Login Successful")
                location.reload()
                navigate('/')
            } else if(res.data.message === 'Wrong Password'){
                setResult("Wrong Password!")
            } else if(res.data.message === 'User not registered'){
                setResult("User not registered!")
            } 
            setTimeout(()=>{
                setResult("")
            },3000)
        })
    }
  return (
    <div className='login-body'>
        <div className="welcome">
            <h1>Welcome to Fitness Future Gym.</h1>
        </div>

        <div className="login">
            <div className="login-left">
                <img id='login-img' src='/fitness future logo.png' alt="" />
            </div>

            <div className="login-right">
                <h1>LOGIN</h1>
                <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter email' />
                <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter password' />
                <button className="login-btn" onClick={login}>Login</button> <span className='result'>{result}</span><br />
                <div>
                    <h3>Don't have an account?</h3>
                    <button className="login-btn" onClick={()=>navigate('/register')}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
