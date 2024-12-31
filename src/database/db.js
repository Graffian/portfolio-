import {db} from '../firebase.js'
import {onSnapshot,collection,addDoc,deleteDoc,doc,query,where,getDocs} from 'firebase/firestore'
import {useState,useEffect,useRef} from "react"
function Database(){
  const [movies,setMovies]=useState([])
  const movieTitleRef=useRef()
  const movieReleaseDateRef=useRef()
  const movieOscarsRef=useRef()
  const titleDeleteRef=useRef()
  var i=0
  
  useEffect(()=>
     onSnapshot(collection(db,"movies"),(snapshot)=>{
        setMovies(snapshot.docs.map(doc=>({
          ...doc.data(),id:doc.id}))
                 )
     }
          
          
     
        )
  ,[])
  console.log(movies)
  async function handleNew(){
    const title=movieTitleRef.current.value
  const releaseDate=movieReleaseDateRef.current.value
  const recievedAnOscar=movieOscarsRef.current.checked
     
    const collectionRef=collection(db,"movies")
    const payload={title:title.toLowerCase(),
    releaseDate:parseInt(releaseDate),
    recievedAnOscar:recievedAnOscar};
    console.log(payload)
   const docRef=await addDoc(collectionRef,payload)
   console.log(docRef.id)
  }
  async function handleDelete(id){
    const docRef=doc(db,"movies",id)
    await deleteDoc(docRef)
  }
  async function handleQuery(){
    const collectionRef=collection(db,"movies")
    const userQueryInput = titleDeleteRef.current.value.toLowerCase()
    const q = query(collectionRef,where("title","==",userQueryInput))
    const snapshot=await getDocs(q)
    const result = snapshot.docs.map(doc=>({...doc.data,id:doc.id}))
    for( i=0;i<result.length;i++){
    const docRef=doc(db,"movies",result[i].id)
    await deleteDoc(docRef)
    }
  }

  return(
    <div>
      <input ref={movieTitleRef} type="string" placeholder="movie title" />
      <input ref={movieReleaseDateRef} type="number" placeholder="release date" />
      <label>
        <input ref={movieOscarsRef} type="checkbox"  />oscars
        
        </label>
      
      <ul>
        {movies.map(movie=>
        <>
        
        <li key={movie.id}>
         <button onClick={()=>handleDelete(movie.id)}>Delete</button> 
          {movie.title}
          </li>
        </>
        )}
      </ul>
      <button onClick={handleNew}>NEW</button>
      <input type="string" ref={titleDeleteRef}/>
      <button onClick={handleQuery} >query delete</button>
    </div>
    
    )
}
export default Database