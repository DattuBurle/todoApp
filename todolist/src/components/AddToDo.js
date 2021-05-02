import React, {useState} from 'react';
import './AddToDo.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddToDo(props) {
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    };
    
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input, 
            completed: false,
        });


        setInput('');
    };

    return (
      <div className="AddTask">
        <form todo-form onSubmit = {handleSubmit} className='todo-form'>
            <input 
                className='todo-input'
                type="text"
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange = {handleChange}
            />
            <AddCircleIcon style={{ fontSize: 60 }} onClick={handleSubmit} className="AddCircleIcon"/>
        </form>
      </div>
    );
  }
  
  export default AddToDo;