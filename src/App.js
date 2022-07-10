
import './App.css';
import Header from './comp/Header';
import { Footer } from './comp/Footer';
import { Todos } from './comp/Todos';
import { AddTodo } from './comp/AddTodo'
import { About } from './comp/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";




function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    console.log("Working!!", title, desc)
    let sno;
    if (todos.length == 0) {
      let sno = 1;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

  }
  const onDelete = (todo) => {
    console.log("I am on delete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },
    [todos])


  return (

    <>
      <BrowserRouter>

        <Header title="Todo List" searchBar={true} />
        <Routes>
          <Route exact path="/" element= {
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
          } />
          <Route exact path="about" element={<About />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>

  );
}

export default App;
