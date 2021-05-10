import React, { useContext, memo } from 'react';
import { useDispatch } from "react-redux";
import EditTodoForm from './EditTodoForm';
import useToggleState from '../hooks/useToggleState';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ todo, completeTodo, removeTodo}) {
  const dispatch = useDispatch();
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <li
        style={{ overflowY: 'hidden' }}
        onClick={() => toggle()}
      >
        <EditTodoForm id={todo.id} task={todo.text} toggleEditForm={toggle} />
      </li>
    );
  }

  return (

    <div
        className= 'todo-row'
        key={todo.id}
      > 
      <div key={todo.id} className='c' >
        <input 
        type="checkbox" 
        id="check" 
        style={{ marginRight: 10 }}
        onClick={() => completeTodo(todo.id)}
        />
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
          onClick={e => {
            e.stopPropagation();
            toggle();
          }}
          className='edit-icon'
        />
      </div>
      
    </div>
    );
}

export default memo(Todo);
