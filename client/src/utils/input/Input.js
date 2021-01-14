import React from 'react';
import "./input.sass"

const Input = (props) => {
    return (
        <div>
            <input type={props.type} onChange={(event)=>{props.setValue(event.target.value)}} value={props.inputValue}/>
        </div>
    );
};

export default Input;