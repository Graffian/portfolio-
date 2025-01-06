import styles from './main.css'
import {db} from "../firebase.js"
import { collection, addDoc } from "firebase/firestore";
import {useState} from 'react'
import {auth} from '../firebase.js'
function Note(){
  const [heading,setHeading]=useState("")
  const [description,setDescription]=useState("")
  function handleHeadingChange(e){
    setHeading(e.target.value)
    
    
  }
  function handleDescriptionChange(e){
    setDescription(e.target.value)
    
    
  }
  async function saveBtn(){
    const docRef=collection(db,"notes")
    const payload={
      title:`${heading}`,
      content:`${description}`,
      userId:auth.currentUser.uid
    }
   await addDoc(docRef,payload)
  }
  return(
    <div>
     <textarea className="headingBox" value={heading} onChange={handleHeadingChange} type="text" placeholder="heading..."></textarea>
      <button onClick={saveBtn}>Save</button>
     <textarea className="descBox" value={description} onChange={handleDescriptionChange} type="text" placeholder="add description..."></textarea>
     
    </div>
    )
  
}
export default Note