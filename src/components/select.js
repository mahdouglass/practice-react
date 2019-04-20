import React from "react";

const Select = (props) => {
    return(
        <div className="form-group">
            <select
                name={props.name}
                value={props.value}
                onChange=""
            >
                <option></option>
            </select>
        </div>
    )
}

export default Select;