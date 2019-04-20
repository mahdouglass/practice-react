import React from "react";

const Select = (props) => {
    return(
        <div className="form-group">
            <select
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option></option>
            </select>
        </div>
    )
}

export default Select;