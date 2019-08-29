import React from 'react'
const inputComponent = (props) => {
    return (
        <input onKeyUp={(event) => props.changed(event)}/>
    )
}

export default inputComponent