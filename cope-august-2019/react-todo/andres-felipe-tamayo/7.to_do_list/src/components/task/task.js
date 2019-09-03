import React,{useEffect} from 'react';
//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './task.css';

const Task =(props)=>{

    useEffect(()=>{
        //Corre para cualquier ciclo
      //  console.log('cockpitsss, useEffect');
        console.log('cockpitsss, useEffect',props.task);
    });

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
                {!(props.task.stateCheckbox) ? <strong className="colorFail">Pending</strong> : <strong className="colorSucced">Completed</strong>}
            </div>
            <hr></hr>
        </div>
    )
}


function areEqual(prevProps, currentProps) {
    console.log("1 ",prevProps.task.stateCheckbox);
    console.log("2 ",currentProps.task.stateCheckbox);
    // return (prevProps.name === currentProps.name &&
    // prevProps.stateCheckbox === currentProps.stateCheckbox); 
    return false;
}


export default React.memo(Task, areEqual);
