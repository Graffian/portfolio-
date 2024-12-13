import React,{useState} from 'react'
import styles from './counter.module.css'
function Counter(){
  const[num,setNum] = useState(0)
  const increment = ()=>{
    setNum(num+1)
  }
  const decrement = ()=>{
    setNum(num-1)
  }
  const reset = ()=>{
    setNum(0)
  }
  return(<>
  <div>
    <p>{num}</p>
    <button className = {styles.button1} onClick={increment}>INCREMENT</button>
    <button onClick={reset}>RESET</button>
    <button onClick={decrement}>DECREMENT</button>
  </div>
  </>)
}
export default Counter