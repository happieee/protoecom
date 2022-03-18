import React, { useState } from 'react'
import "./Login.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
// import { Password } from '@mui/icons-material';

function Login() {
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const history= useHistory()
    const login =event=>{
        event.preventDefault()   
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
          //logged in successfully
          history.push("/")
        })
        .catch(e =>alert(e.message))
    }
    
      const register =event=>{
          event.preventDefault()
          auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth)=>{
            history.push("/")

          })
          .catch(e=>alert(e.message))
      }
  
  return (
          <div className='login'>
            <div className='login_container'>
            <h1>Sign in</h1>
            <form>  
            <h5>E-mail</h5>
            <input value={email } onChange={event => setEmail(event.target.value)} type= "text"/>
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
            <button onClick={login} type="submit" className='signbutt'>Signin</button>
            <p></p>
            <button onClick={register} className='singupbutt'>Create your Etsy Account</button>
            </form>
            </div>
          </div>

    )
  }

export default Login
