import React from 'react';
import Task from '../task/task';
import PropTypes from 'prop-types';
const TaskList =(props)=>{

    return (<div>
        <h1>Task to do</h1>
        {
            props.taskList.map((task,i)=>{

            return <Task task={task} key={i} index={i} 
                    deleteTask={()=>props.deleteTask(i)}
                    changeState={()=>props.changeState(i)}
                    />
            })
        }
    </div>);
}

TaskList.propTypes ={
    taskList:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        state:PropTypes.bool,
    })),
    index:PropTypes.number,
    deleteTask:PropTypes.func,
    changeState:PropTypes.func
}
export default TaskList;
