import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h1 className="text-center my-3 text-4xl"><b> Todos list</b></h1>
      {props.todos.length===0? <h4 className="text-center text-xl">No todos to display</h4> :
      props.todos.map((todo) =>{
        return <Todoitem todo ={todo} key={todo.sno} onDelete = {props.onDelete}/>
      })
    }

    </div>
  )
}
