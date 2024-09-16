import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './task.css';
import PropTypes from 'prop-types';
const Task =(props)=>{

    function toCamelCase(str)  {

        let textArray=str.split('');
        textArray[0]=textArray[0].toUpperCase();

        return textArray.join('');
    }


    return(
        <div className="task">
            <div>
                {props.index+1}. {toCamelCase(props.task.name)}
            </div>
            <div>
                <input type="checkbox" onChange={props.changeState}></input>
                <FontAwesomeIcon icon={faTrashAlt} onClick={props.deleteTask} size="lg" className="icons"/>
                {!(props.task.state) ? <strong className="colorFail">Pending</strong> : <strong className="colorSucced">Completed</strong>}
            </div>
            <hr></hr>
        </div>
    )
}

Task.propTypes ={
    index:PropTypes.number,
    name:PropTypes.string,
    state:PropTypes.bool,
    deleteTask:PropTypes.func,
    changeState:PropTypes.func
}

function areEqual(prevProps, currentProps) {
    // console.log(prevProps.task, currentProps.task);
    return (prevProps.task !== currentProps.task)?false:true;
}
   
export default React.memo(Task, areEqual);
