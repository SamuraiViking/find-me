import React, { Component } from 'react';
import TableGrid from './TableGrid'
import './App.css'


class CafFirstFloor extends Component {

    render() {
        return (
            <div class="table-grid-container">
                <TableGrid 
                    rows={2}
                    columns={4}
                    shape="long-rectangle"
                />
            </div>
        );
    }
}


export default CafFirstFloor;