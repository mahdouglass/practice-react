import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />
    }
}