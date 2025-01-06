import styles from './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"
import { collection, onSnapshot,doc,deleteDoc } from "firebase/firestore";
import {useState,useEffect} from 'react'
import {db} from '../firebase.js'

function Main(){
  const collectionRef=collection(db,"notes")
  const navigate = useNavigate()
  const [notes,setNotes]=useState([])
  
  function addNote(){
    navigate('/note')
  }
  useEffect(()=>{onSnapshot(collectionRef,(snapshot)=>{
            const data = snapshot.docs.map((doc)=>(
              {id:doc.id,
                ...doc.data()
              }))
              setNotes(data)
          })
          
          
  },[])
  async function deleteBtn(id){
    const docRef = await doc(db,"notes",id)
    
    console.log(docRef)
   await deleteDoc(docRef)
  }
  return(
    <div >
      <h2 className="mainDiv"><b>NOTES-APP</b></h2>
      <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      <FontAwesomeIcon className="barIcon" icon={faBars} />
      <FontAwesomeIcon onClick={addNote} className="addIcon" icon={faPlus} />
      <ol>
        {notes.map((note)=>(
          <li key={note.id}>{note.title}:{note.content}<button onClick={()=>deleteBtn(note.id)}>Delete</button></li>
        ))}
        
      </ol>
    </div>
    )
}
export default Main