import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/register',{
            username,
            email,
            password,
            confirmPassword
        },{withCredentials:true,credentials:true})
        .then((res)=>{
            console.log(res)
            navigate('/players/list')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <form onSubmit={submitHandler} className='col-6 mx-auto'>
        <h1>Register</h1>
            <label htmlFor="">Username:</label>
            <input type="text" className='form-control'
            onChange={(e)=>setUsername(e.target.value)}/>

            <label htmlFor="">Email:</label>
            <input type="text" className='form-control'
            onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="">Password:</label>
            <input type="password" className='form-control'
            onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor="">Confirm Password:</label>
            <input type="password" className='form-control'
            onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button className='btn btn-info mt-3'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm