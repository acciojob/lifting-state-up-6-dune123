
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos,setTodos]=useState([
   { id:1,text:"Learn React",completed:true},
    {id:2,text:"Build a React app",completed:true},
   {id:3,text:"Deploy the React app",completed:true}
  ])

  const handleComplete=(id)=>{
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: false } : todo
      )
  );
  }

  console.log(todos)
  return (
    <div>
        {/* Do not remove the main div */}
        <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
