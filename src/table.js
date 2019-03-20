import React, { Component } from "react"

class Table extends Component {
    render() {
        const { characterData } = this.props
        
        return (
            <table class="table table-sm">
                <TableHeader />
                <TableBody characterData={characterData} />
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