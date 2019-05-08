import React from "react";

const CharComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }

    return (
        <span 
            style={style}
        >{props.value}</span>
    )
}
export default CharComponent;