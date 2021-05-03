import React, {useState} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Completed({ todos, completeTodo, removeTodo }) {
  

  return (
    todos.map((todo, index) => (

      todo.completed ? 
      
      <div
        className= 'todo-row'
        key={index}
      > 
        <div key={todo.id} className='c' >
          <input 
          type="checkbox" 
          id="check" 
          className='dragIcon' 
          onClick={() => completeTodo(todo.id)}
          checked="true"
          style={{ marginRight: 10 }}
          />
          {todo.text}
        </div>
        <div className='icons'>
          <DeleteForeverIcon
            style={{ fontSize: 20 }}
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />
          
        </div>
      </div>
      

      : 
      

      console.log("task completed, check it in completed tab")
    
    
)));
};

export default Completed;
