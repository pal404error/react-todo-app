import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div className="my-5">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
    </div>
  )
}
