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
    return <thead />
}

const TableBody = () => {
    return <tbody />
  }

export default Table