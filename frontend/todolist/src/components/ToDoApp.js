import React, {useState, useEffect} from 'react';
import './ToDoApp.css';
import Header from "./Header";
import Tabs from "./Tabs";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {fetchTodos, addTodoo, updatedTodoo} from '../actions/PostActions';


function ToDoApp() {

    

    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
      setSearchfield(event.target.value);
    }

    const todosss = useSelector(state => state.todos.items, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchTodos());
    }, []);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            window.alert("Please enter a task to do");
            return;
        }

        const newTodo = [todo, ...todosss];

        
        dispatch(addTodoo(newTodo));
        localStorage.setItem(todo.id, todo.text+', '+todo.completed);
    };

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  

      let updatedTodos = [...todosss].map(todo => {
        if (todo.id === todoId) {
          todo.text = newValue.text
          localStorage.setItem(todo.id, newValue.text+', '+todo.completed);
        }
        return todo;
      });
      console.log(updatedTodos)
      dispatch(updatedTodoo(updatedTodos));
      
      dispatch(fetchTodos());

      
    };
  
    const removeTodo = id => {
      const removedArr = [...todosss].filter(todo => todo.id !== id);
      localStorage.removeItem(id);
      dispatch(updatedTodoo(removedArr));
    };
  
    const completeTodo = id => {
      let updatedTodos = todosss.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
          todo.completed = !todo.completed;
          localStorage.setItem(todo.id, todo.text+', '+todo.completed);
        }
        return todo;
      });
      dispatch(updatedTodoo(updatedTodos));
      dispatch(fetchTodos());
    };

    const filterTodos = [...todosss].filter(
      todo => todo.text.toLowerCase().includes(searchfield.toLowerCase()))
    
    const listofTodos = (searchfield === '') ? [...todosss] : filterTodos;

    return (
      <div className="todoList">
          <Header searchChange = {onSearchChange}/>
          <Tabs 
            onSubmit={addTodo}
            todos={listofTodos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
      </div>
    );
  }


  
export default ToDoApp;