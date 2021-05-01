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
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Tabs;