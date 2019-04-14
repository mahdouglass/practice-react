import React from "react";

const Input = (props) => {
    console.log(props.placeholder);
    return (
        <div className="form-group">
            <label></label>
            <input 
                type=""
                name=""
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;