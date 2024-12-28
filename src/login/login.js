import styles from './login.css'
import {auth} from '../firebase.js'
import {microsoftProvider} from '../firebase.js'
import {googleProvider} from '../firebase.js'
import {googlePopup} from '../firebase.js'
import {useState ,useEffect} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {microsoftPopup} from '../firebase.js'

function Login(){
  const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  async function signInBtn(){
    try{
    await createUserWithEmailAndPassword(auth,email,password)}catch(error){
      console.error(error)
    }
  }
 async  function googleBtn(){
   try{
    await googlePopup()
   }catch(err){
     console.log(err.message)
   }
  }
  
  async  function microsoftBtn(){
   try{
    await microsoftPopup()
   }catch(err){
     console.log(err.message)
   }
  }
  

  return(
    <div>
      <h2>SIGN IN</h2>
      <p className="email"><b>Email address:</b></p>
      <input className="emailInput" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
      <p className="pass"><b>Password:</b></p>
      <input className="passInput" type="password" onChange={(e)=>{setPassword(e.target.value)}} /><br/>
      <button className="signIn" onClick={signInBtn}>SIGN IN</button>
      <p className="other"><b>OR SIGN IN USING..</b></p>
      <button onClick={googleBtn} className="google">GOOGLE</button><br/>
      <button onClick={microsoftBtn} className="microsoft"> MICROSOFT</button>
      
    </div>
    )
}

export default Login