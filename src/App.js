
import './App.css';
import Header from './comp/Header';
import {Footer } from './comp/Footer';
import { Todos } from './comp/Todos';
import {AddTodo} from './comp/AddTodo'
import React, { useState } from 'react';

function App() {


  const addTodo = (title,desc)=> {
    console.log("Worksingf n", title,desc)
    let sno;
    if(todos.length==0){
      let sno = 1;
    } else{
      let sno = todos[todos.length -1].sno +1;
    }
    
    const myTodo = {
      sno : sno,
      title: title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
const onDelete =(todo)=>{
  console.log("I am on delete", todo)
  setTodos(todos.filter((e)=>{
  return e!==todo;
}))
}

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "title1",
      desc:"Desc here 1"
    },{
      sno: 2,
      title: "title2",
      desc:"Desc here 2"
    },{
      sno: 3,
      title: "title3",
      desc:"Desc here 3"
    }
  ]);


  return (

    <>
    <Header title="React Todo" searchBar={true}/>
    <AddTodo addTodo={addTodo} />
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>

  );
}

export default App;
