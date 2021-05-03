import React, {useState} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import store from './components/Store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList/>
      </div>
    </Provider>
    
  );
}

export default App;
