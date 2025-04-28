import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login , signup} from '../../Firebase'
import { useState } from 'react'
const Login = () => {

  const [name , setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signState, setSignState] = React.useState('Sign In');

  const user_auth = async (e) => {
    e.preventDefault()
    if(signState === "Sign In"){
      await login(email,password)
    }
    else if(signState === "Sign Up"){
      await signup(name,email,password)
    }
  }
  return (
    <div className='login'>
      <img src={logo} alt="github" className='logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<input  value= {name} onChange={(e)=>{setName(e.target.value)}}
          type="text" placeholder='Username' className='input'/>:null}
          <input value= {email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' className='input'/>
          <input value= {password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='input'/>
          <button className='btn' onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" className='checkbox'/>
              <label htmlFor="remember-me">Remember me</label>

            </div>
            <p>need help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign Up"?<p>Already have an account ? <span onClick={()=>setSignState('Sign In')}>Sign In</span></p>:<p>New to Netflix ? <span onClick={()=>setSignState('Sign Up')}>Sign Up Now</span></p>}
          
        </div>


      </div>
      
    </div>
  )
}

export default Login
