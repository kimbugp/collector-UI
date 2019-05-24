import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import Table from './table';

export default class HousesService extends Component {

    render() {
        console.log(this.state)
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
                <Table title='Houses'/>
            </Typography>
        );
    }
}
