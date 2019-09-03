import React from 'react';
//import React ,{useEffect} from 'react';
import Task from '../task/task';

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

export default TaskList;
