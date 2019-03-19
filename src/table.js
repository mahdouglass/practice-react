import React, { Component } from "react"

class Table extends Component {
    render() {
        return (
            <table class="table table-sm">
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
  }

export default Table