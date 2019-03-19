import React, { Component } from "react"

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Systems Analyst</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>PHP Developer</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table