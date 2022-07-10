import React, { useState } from 'react';

export const AddTodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Desc cannot be empty")
    }
    props.addTodo(title,desc)

  }
  return (

    <div className="container">
      <h2>Add todo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-outline-success">Add Todo</button>
      </form>
    </div>
  )
}
