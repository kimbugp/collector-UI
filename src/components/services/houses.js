import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { getTenants } from '../../actions/users';
import Table from '../../others/table';

export default class HousesService extends Component {
    state = {
        tenants: []
    }

    async componentDidMount() {
        let tenants = await getTenants()
        tenants.map(tenant => (
            this.setState(prevState => ({
                tenants: [...prevState.tenants, tenant]
            }))
        ));
    }

    render() {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
                <Table title='Houses' tenants={this.state.tenants} />
            </Typography>
        );
    }
}
