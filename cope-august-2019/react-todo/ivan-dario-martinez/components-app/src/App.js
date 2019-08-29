import React from 'react';
import './App.css';
import List from './Components/List/List';

//Ivan Martinez

let todoList = ['Create React.js project ',
                'Make todo list',
                'Add functions to append elements',
                'Improve elements look and feel',
                'Add functions to delete elements'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Todo List
        </p>

        <List items={todoList} />

      </header>
    </div>
  );
}

export default App;