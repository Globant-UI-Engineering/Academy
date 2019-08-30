import React, {Component, Fragment} from 'react';
import classes from'./App.module.css';
import withClass from '../hoc/withClass'
import InputComponent from '../components/InputComponent/InputComponent'
import TodoList from '../components/TodoList/TodoList'

class App extends Component {
  state = {
    todoListItems: []
  }

  inputChangedHandler = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      const todoList = [...this.state.todoListItems, event.target.value]
      this.setState({todoListItems: todoList})
      event.target.value = ''
    }
  }

  render() {
    return (
      <Fragment>
        <InputComponent changed={this.inputChangedHandler}/>
        <hr className={classes.HorizontalLine}/>
        <TodoList items={this.state.todoListItems}/>
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
