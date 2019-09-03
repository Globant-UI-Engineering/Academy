import React from 'react';
import './addTask.css';
const addTask =(props)=>{

    return(
        <div className="addToDoComponent">
            <div ><input type="text" id="input_homework" onKeyDown={props.addhomeworkEnterkey}></input></div>
            <div><button onClick={props.addhomework} > Save</button></div>
        </div>
    )
}

export default addTask;