import React, { Component } from 'react';
import TableGrid from './TableGrid'
import './App.css'


class CafFirstFloor extends Component {

    render() {
        return (
            <TableGrid 
                rows={6}
                columns={4}
                shape="long-rectangle"
            />
        );
    }
}


export default CafFirstFloor;