import React, {useState} from 'react';
import './Tabs.css';
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Completed from "./Completed";

function Tabs({ todos, completeTodo, removeTodo, updateTodo , onSubmit}) {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            ToDos
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Completed
          </button>
          
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <AddToDo onSubmit={onSubmit}/>

            <div className= "scroll_todolist">
              <ToDoList
                  todos={todos}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  onSubmit={onSubmit}
              />
            </div>
          
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            
            <div className= "scroll_todolist">
              <Completed
                  todos={todos}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
              />
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
export default Tabs;