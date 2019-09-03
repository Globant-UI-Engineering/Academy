import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
        todoList: this.props.initList
    };
  }

  addItem( todoItem ) {
      let _todoList = this.state.todoList
      _todoList.unshift({
          id: _todoList.length + 1, 
          title: todoItem.newItem, 
          state: 'init'
      });
      this.setState({todoList: _todoList});
  }
  removeItem({ id, index }) {
      let _todoList = []
      for (let i = 0; i < this.state.todoList.length; i++) {
          if (i != index) {
              _todoList.push(this.state.todoList[i]);
          }
      }
      this.setState({todoList: _todoList});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO List</h1>

        </header>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.props.initList} updateList={this.state.todoList} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
