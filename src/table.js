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
    return <tbody />
  }

export default Table