import React from 'react'
import classes from './InputComponent.module.css'
const inputComponent = (props) => {
    return (
        <div className={classes.inputComponent}>
            <input onKeyUp={(event) => props.changed(event)}/>
        </div>
    )
}

export default inputComponent