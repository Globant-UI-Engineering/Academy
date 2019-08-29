import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
const todoList = (props) => {
    return props.items.map((item, index) => {
        return (
            <TodoListItem content={item} key={index}/>
        )
    })
    
}

export default todoList