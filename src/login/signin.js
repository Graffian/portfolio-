import styles from './login.css'
import {useRef,useState,useEffect} from 'react'
import {auth} from '../firebase.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Link,useNavigate} from 'react-router-dom'


function SignIn(){
 const navigate = useNavigate()
  const emailInputRef=useRef()
  const passInputRef=useRef()
  const [userValidMessage,setuserValidMessage]=useState("")
  
  async function signInBtn(){
    
let errorCode=0
    const email = emailInputRef.current.value
    const pass = passInputRef.current.value
    try{
   const userCredential = await signInWithEmailAndPassword(auth,email,pass)
   console.log(userCredential.user)
   
   setuserValidMessage(`WELCOME ${userCredential.user.uid}`)
   navigate("/main")
   console.log(userCredential.user)
    }catch(error){
      const errorCode = error.code
      setuserValidMessage("No user exists")
      console.log(errorCode)
    }
 }
  return(
    <div className="loginBox">
      
        <p className="emailText">EMAIL:</p>
        <input ref={emailInputRef} className="emailBox" type="text" placeholder="email"/>
        <p className="passText">PASSWORD:</p>
        <input ref={passInputRef} className="passBox" type="password" placeholder="password"/>
      <p className="newUserMsg">New user?<Link className="newUserLink" to="/signup">Sign up here</Link></p>
      
      <button onClick={signInBtn}>SIGN IN</button>
      <p> {userValidMessage}</p>
      
    </div>
    )
}
export default SignIn