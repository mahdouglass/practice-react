import React from "react";

const ValidationComponent = (props) => {
    if (props.value < 5) {
        return <p>Text length is too short.</p>
    }
    if (props.value > 10) {
        return <p>Text length is too long.</p>
    }
    else {
        return <p>Text length is just right.</p>
    }
}
export default ValidationComponent;