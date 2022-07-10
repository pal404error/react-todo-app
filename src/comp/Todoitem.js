import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  
  return (
    <>
    <div className="card border-primary mb-3">
      <h3>
      <div className='card-header'>{todo.title}</div>
      <div className='card-body text-primary'>{todo.desc}</div>
      
      </h3>
    </div>
    <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
    <hr></hr>
    </>
  )
}
