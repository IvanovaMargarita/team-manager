import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{

            email,
            password,
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

        <label htmlFor="">Email:</label>
        <input type="text" className='form-control'
        onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Password:</label>
        <input type="password" className='form-control'
        onChange={(e)=>setPassword(e.target.value)}/>

        <button className='btn btn-info mt-3'>Login</button>
    </form>
</div>
  )
}

export default Login;