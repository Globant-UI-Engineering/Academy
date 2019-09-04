import React from 'react';
import './addTask.css';
import PropTypes from 'prop-types';
const AddTask =(props)=>{

    return(
        <div className="addToDoComponent">
            <div ><input type="text" id="input_homework" onKeyDown={props.addhomeworkEnterkey}></input></div>
            <div><button onClick={props.addhomework} > Save</button></div>
        </div>
    )
}

AddTask.propTypes ={
    addhomeworkEnterkey:PropTypes.func,
    addhomework:PropTypes.func
}

export default AddTask;