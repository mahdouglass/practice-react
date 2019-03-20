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
                <th scope="col">Name</th>
                <th scope="col">Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
  }

export default Table