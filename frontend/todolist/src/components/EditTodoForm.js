import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import useInputState from '../hooks/useInputState';
import {fetchTodos, updatedTodoo} from '../actions/PostActions';

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useDispatch();
  const [value, handleChange, clearValue] = useInputState(task);

  const todosss = useSelector(state => state.todos.items, shallowEqual);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (!value || /^\s*$/.test(value)) {
            return;
          }

        let updatedTodos = [...todosss].map(todo => {
        if (todo.id === id) {
            todo.text = value
            localStorage.setItem(todo.id, value+', '+ todo.completed);
        }
        return todo;
        });
        dispatch(updatedTodoo(updatedTodos));
        toggleEditForm();
        clearValue();
      }}
      className= 'todo-row'
    >
      <input
        className= 'edit_input'
        autoFocus
        value={value}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
      />
    </form>
  );
}

export default EditTodoForm;
