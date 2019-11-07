import React, { Component } from 'react';
import './App.css'
import Table from './Table'


class TableGrid extends Component {
    createTableGrid(rows, columns) {
        const tables = []

        for(var i = 0; i < rows; i++) {
            const tablesColumn = []
            for(var j = 0; j < columns; j++) {
                tablesColumn.push(<Table shape="long-rectangle"/>)
            }
            tables.push(tablesColumn);
        }
        return tables;
    }

    render() {
        return(
            <div className="table-container">
                { this.createTableGrid(this.props.rows, this.props.columns) }
            </div>
        )
    }
}

export default TableGrid;