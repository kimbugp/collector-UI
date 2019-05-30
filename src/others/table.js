import React from 'react';
import MaterialTable from 'material-table';
import HousesAction, { createHouse, deleteHouse } from '../actions/houses';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export default class Table extends React.Component {

  state = {
    columns: [
      { title: 'House', field: 'house_name', type: 'string', filtering: false },
      { title: 'Rate', field: 'rate', type: 'numeric', filtering: false },
      { title: 'Occupied', field: 'is_occupied', type: 'boolean' },
      {
        title: 'Tenant', field: 'tenant.email', type: 'string', filtering: false,
        editComponent: () => (
          <FormControl>
            <Select
              input={<Input name="tenant" />}
              autoWidth
              value={this.state.tenantName}
              onChange={this.handleChange}
            >
              {this.props.tenants.map(tenant => (
                <MenuItem key={tenant.identifier} value={tenant.email} id={tenant.identifier}>
                  {tenant.name}/{tenant.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )
      },
      { title: 'Paid', field: 'is_paid', type: 'boolean', editable: 'never' },
      { title: 'Start Date', field: 'start_date', type: 'date', filtering: false },
    ],
    data: [
    ],
    tenantName: "None",
  }
  handleChange = (event) => {
    this.setState({
      tenantName: event.target.value,
      tenantId: event.currentTarget.id
    })
  }

  render() {
    return (
      <React.Fragment>
        <MaterialTable
          title={this.props.title}
          columns={this.state.columns}
          data={
            query =>
              new Promise(async (resolve, reject) => {
                let url = `page=${query.page + 1}`
                let filters = (queries) => {
                  let url = '';
                  if (queries) {
                    queries.map(query => {
                      console.log(query)
                      url += `&${query.column.field}=${
                        query.column.type !== 'boolean' ?
                          query.value : query.value === 'checked' ?
                            true : false}`
                      return url
                    })
                  }
                  return url

                }
                let search = query.search ? `&search=${query.search}` : ''
                let res = await HousesAction(url + search + filters(query.filters))
                let sum = res.results.map(resp => (resp.rate)).reduce((partial_sum, a) => partial_sum + a, 0);
                this.setState({ sum: sum })
                resolve({
                  data: res.results,
                  page: res.current - 1,
                  totalCount: res.count
                });
              })
          }
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(async () => {
                  let date = newData.start_date.getFullYear()
                    + "-" + (newData.start_date.getMonth() + 1)
                    + "-" + newData.start_date.getDate()
                  let house = newData
                  house.start_date = date
                  house.tenant_id = this.state.tenantId
                  await createHouse(house)
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                  resolve();
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(async () => {
                  let data = this.state.data;
                  await deleteHouse(oldData.identifier)
                  data.splice(data.indexOf(oldData), 1);
                  this.setState({ data }, () => resolve());
                  resolve();
                }, 600);
              }),

          }}
          options={{
            filtering: true,
            exportButton: true

          }}
        />
        <TableRow>
          <TableCell rowSpan={3} />
          <TableCell colSpan={2}>Subtotal</TableCell>
          <TableCell align="left">{this.state.sum}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

