import React,{useState} from 'react'
import styles from './todo.css'
function Todo(){
  const[tasksInput,setTasksInput] = useState("")
const[tasks,setTasks]=useState([])
const[completion,setCompletion]=useState(0)
function handleTaskInput(e){
  setTasksInput(e.target.value)
}
function addTaskBtn(){
  setTasks([...tasks,tasksInput])
  setTasksInput("")
}
function completionState(){
let checkBoxes=document.getElementsByClassName("checkBtn")
let z=0;
for(let i=0;i<checkBoxes.length;i++){
  if(checkBoxes[i].checked){
    z=z+1;
  }
}
let completionRate=(z/checkBoxes.length)*100;
setCompletion(completionRate)
}
  return(
    
    <div>
      <h1><b>TO-DO-LIST</b></h1>
    <input type="text" value={tasksInput} onChange={handleTaskInput}/>
    <button onClick={addTaskBtn}>ADD TASK</button>
    <ol>
      {tasks.map((task,index)=>{
        return <li key={index}>{task.toUpperCase()}<input className="checkBtn" type="checkbox"/></li>
      })}
    </ol>
    <button onClick={completionState}>CALCULATE YOUR COMPLETION RATE</button>
    <h3>COMPLETION:{completion}%</h3>
    </div>
    
  )
}
export default Todo