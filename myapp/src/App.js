import React from 'react'
import {useState} from 'react';
import './App.css'

export default function App() {
  // const[count,setCount]=useState(10)
  // function add(){
  //   setCount(count+1)
  // }
  // function sub(){
  //   count=count-1;
  //   console.log(count);
  // }
  // return (
  //   <>
  //   <h1>Total number : {count}</h1>
  //   <button onClick={add}>ADD</button>
  //   {/* <button onClick={sub}>SUB</button> */}
  //   </>
  // )


  // const tasks=[
  //   {id:1,name:"This is task 1",complete:true},
  //   {id:2,name:"This is task 2",complete:false},
  //   {id:3,name:"This is task 3",complete:true}
  // ]

  const[tasks,setTask]=useState([
    {id:1,name:"This is task 1",complete:true},
    {id:2,name:"This is task 2",complete:false},
    {id:3,name:"This is task 3",complete:true}
  ])

  function taskDelete(id){
    setTask(tasks.filter((t)=>t.id!=id))
    
  }

const [show,setShow]=useState(true)

function showhide(){
  
  setShow(!show)
}

  return(
    <div className="App">
      <h1>Task-List</h1>
      <button className='btn' onClick={showhide}>Show/Hide</button>
      <ul>
      {show && tasks.map((task)=><li>{task.id}---------{task.name}
      <button onClick={()=>taskDelete(task.id)} className='btn deletebtn'>Delete</button>
      </li> )}
      </ul>
    </div>
  )
}