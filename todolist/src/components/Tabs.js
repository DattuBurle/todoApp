import React, {useState} from 'react';
import './Tabs.css';
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";

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
            To Do
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
          
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h1>Completed Tasks</h1>
          </div>
  
        </div>
      </div>
    );
  }
  
export default Tabs;