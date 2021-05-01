import React, {useState} from 'react';
import './ToDoList.css';
import AddToDo from "./AddToDo";
import Todo from './ToDo';
import Header from "./Header";



function ToDoList() {

    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
      setSearchfield(event.target.value);
    }

    
    const [todos, setTodos] = useState([]);
    
    const filterTodos = [...todos].filter(
      todo => todo.text.toLowerCase().includes(searchfield.toLowerCase()))

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            window.alert("Please enter a task to do");
            return;
        }

        const newTodo = [todo, ...todos];

        setTodos(newTodo);
        console.log(...todos);
        localStorage.setItem(todo.id, todo.text);
    };

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
      localStorage.removeItem(id);
      setTodos(removedArr);
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
    
    const listofTodos = (searchfield === '') ? [...todos] : filterTodos;

    return (
      <div className="todoList">
          <Header searchChange = {onSearchChange}/>
          <AddToDo onSubmit={addTodo}/>
          
          <Todo
            todos={listofTodos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
      </div>
    );
  }
  
export default ToDoList;