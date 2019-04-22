import React from "react";

const options = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' }
];

const Select = (props) => {
    return(
        <div className="form-group">
            <select
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                options={options}
            >
            </select>
        </div>
    )
}

export default Select;