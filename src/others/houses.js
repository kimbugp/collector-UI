import Typography from '@material-ui/core/Typography';
import React from 'react';
import Table from './table';

export const HousesService = (props) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
            <Table title='Houses'/>
        </Typography>
    );
}