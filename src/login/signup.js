import styles from './login.css'
import {useRef,useState,useEffect} from 'react'
import {auth} from '../firebase.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
function SignUp(){
  
  const emailInputRef=useRef()
  const passInputRef=useRef()
  const userNameInputRef=useRef()
  const [passMessage,setPassMessage]=useState("")
  const [isPassError,setIsPassError]=useState(null)
  const navigate = useNavigate()
  async function signUpBtn(){
      navigate('/')
    const email = emailInputRef.current.value
    const pass = passInputRef.current.value
    const userName=userNameInputRef.current.value
      for(let i=0;i<pass.length;i++){
    if(pass.charAt(i)=='_'||pass.charAt(i)=='-'||pass.charAt(i)=='^'||pass.charAt(i)=='#')
    {
     const userInfo = await createUserWithEmailAndPassword(auth, email, pass)
        setIsPassError(false)
        setPassMessage("VALID PASSWORD")
        userInfo.user.displayName = userName
      }else{
        setIsPassError(true)
        setPassMessage("INVALID PASSWORD ,include special symbols _,-,#,^")
        
         
      }
    }
     
  }
  return(
    <div className="loginBox">
      
        <p className="emailText">EMAIL:</p>
        <input ref={emailInputRef} className="emailBox" type="text" placeholder="email"/>
        <p className="passText">PASSWORD:</p>
        <input ref={passInputRef} className="passBox" type="password" placeholder="password"/>
     
      <p className="userNameText">USERNAME:</p>
        <input ref={userNameInputRef} className="userNameBox" type="text" placeholder="username"/>
         <p className={isPassError?"error":"noError"}>{passMessage}</p>
      <button onClick={signUpBtn}>SIGN UP</button>
      
      
    </div>
    )
}
export default SignUp