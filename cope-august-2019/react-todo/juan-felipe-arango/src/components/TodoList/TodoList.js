import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import classes from './TodoList.module.css'
import withClass from '../../hoc/withClass'
const todoList = (props) => {
    return (
        <ul>
            {
              props.items.map((item, index) => {
                return <TodoListItem content={item} key={index}/>
            })  
            }
        </ul>
    )
    
}

export default withClass(todoList, classes.TodoList)