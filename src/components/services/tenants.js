import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import TenantsTable from '../../others/tenants';

export default class TenantsService extends Component {
    state = {
        tenants: []
    }

    render() {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
                <TenantsTable title='Tenants' tenants={this.state.tenants} />
            </Typography>
        );
    }
}
