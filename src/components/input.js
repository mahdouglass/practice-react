import React from "react";

const Input = (props) => {
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input 
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default Input;