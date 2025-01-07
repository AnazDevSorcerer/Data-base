import { useEffect, useState } from 'react'
import axios from 'axios'
const api_domain = "http://localhost:3000"

function App() {
  const [tasks, setTasks] = useState([])
  const {taskInput, setTaskInput} = useState("")

  const getTasks = () =>{
    axios.get(api_domain)
    .then(res => {
      console,log(res.data)
     setTasks(res.data.taskItems)
       
    })
    .catch(err => {
      console.log("erorr")
    })
  }}

  useEffect(() =>{
    getTasks()
  }, [])
  
  const changeHandler = (e) => {
    setTaskInput(e.target.value)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
  }

  const changeHandler2 = (e) => {
    e.preventDefault()
    axios.post(api_domain, {task: taskInput})
    .then(res => {
      setTaskInput("")
      getTasks()
    })
    .catch(() => {
     console.log("erorr")
  })


const deleteTask = (index)=> {
  axios.delete(`api_domain/task/${index}`)
 .then(res => 
  getTask()
 )
 .catch(() => {
   console.log("erorr")
 })}


  return (
    <>
      <h1>todo app</h1>
      <form onsubmit = {formSubmitHandler} >
        <input type="text" placeholder="enter task" value = {taskInput}  onchange = {changeHandler} /> <br /> <br />
        
        <input type="submit" value= "add task" />
      </form>
      <ul>
        {tasks.map((task, index) =>{
          return(
            <li key = {index}>{task.task} <button>edit</button>  
            <button onClick = {() => deleteTask (index)}> deleteTask </button> 
            </li> 
          )
        })}
      </ul>
    </>
  )
}

export default App
