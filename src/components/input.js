import React from "react";

const Input = (props) => {
    return (
        <div className="form-group">
            <label></label>
            <input 
                type={props.type}
                name=""
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;