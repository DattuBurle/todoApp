import React, {useState} from 'react';
import './App.css';
import ToDoApp from './components/ToDoApp';
import { Provider } from 'react-redux';
import store from './Store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <ToDoApp/>
      </div>
    </Provider>
    
  );
}

export default App;
