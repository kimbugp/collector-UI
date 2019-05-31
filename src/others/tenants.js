import React from 'react';
import MaterialTable from 'material-table';


export default class TenantsTable extends React.Component {

  state = {
    columns: [
      { title: 'Name', field: 'name', type: 'string' },
      { title: 'Username', field: 'username', type: 'string' },
      { title: 'Email', field: 'email', type: 'string' },
    ],
    data: [
    ],
  }

  render() {
    return (
      <React.Fragment>
        <MaterialTable
          title={this.props.title}
          columns={this.state.columns}
          data={this.props.tenants}
        />
      </React.Fragment>
    );
  }
}

