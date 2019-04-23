import React from "react";

const Checkbox = (props) => {
    return (
        <div className="form-group">
            <label>Active</label>
            <input
                name="Subscribe"
                type="checkbox"
            />
        </div>
    )
}

export default Checkbox;