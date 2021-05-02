import React, { useState } from 'react';
import AddToDo from './AddToDo';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <AddToDo edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    todos.map((todo, index) => (
    
        
        todo.completed ? 
        console.log("task completed, check it in completed tab")

        : 
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        > 
          <div key={todo.id} className='c' >
            <input type="checkbox" id="check" className='dragIcon' onClick={() => completeTodo(todo.id)} checked="true"/>
            {todo.text}
          </div>
          <div className='icons'>
            <DeleteForeverIcon
              style={{ fontSize: 20 }}
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <EditIcon
              style={{ fontSize: 20 }}
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      
      
  )));
};

export default Todo;
