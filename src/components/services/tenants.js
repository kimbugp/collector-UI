import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import TenantsTable from '../../others/tenants';
import { getUsers } from '../../actions/users';
import { connect } from "react-redux";

export class TenantsService extends Component {
    state = {
        tenants: []
    }
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props)
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
                <TenantsTable title='Tenants' tenants={this.props.tenants} />
            </Typography>
        );
    }
}


const mapStateToProps = ({ userReducer }) => ({
    tenants: userReducer.tenants
});

export default connect(
    mapStateToProps,
    { getUsers }
)(TenantsService);

