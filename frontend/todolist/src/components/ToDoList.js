import React from 'react';
import ToDo from "./ToDo";

function ToDoList({ todos, completeTodo, removeTodo }) {

    return (

        todos.map((todo) => (
    
        
            todo.completed ? 
    
            console.log("task completed, check it in completed tab")
    
            : 
            
            <ToDo 
            key={todo.id} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            todo = {todo}
            />
      ))
      
    );
  }
  
  export default ToDoList;