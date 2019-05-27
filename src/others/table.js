import React from 'react';
import MaterialTable from 'material-table';
import HousesAction, { createHouse, deleteHouse } from '../actions/houses';

export default function Table(props) {

  const [state, setState] = React.useState({
    columns: [
      { title: 'House', field: 'house_name', type: 'string' },
      { title: 'Rate', field: 'rate', type: 'numeric' },
      { title: 'Tenant', field: 'tenant.email', type: 'string' },
      { title: 'Paid', field: 'is_paid', type: 'boolean' },
      { title: 'Start Date', field: 'start_date', type: 'date' },
    ],
    data: [
    ],
  });
  return (
    <MaterialTable
      title={props.title}
      columns={state.columns}
      data={query =>
        new Promise(async (resolve, reject) => {
            let url = `page=${query.page + 1}`
            let res = await HousesAction(url)
            resolve({
                data: res.results,
                page: res.current-1,
                totalCount: res.count
            });
        })
    }
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(async () => {
              resolve();
              let date = newData.start_date.getFullYear()
                + "-" + (newData.start_date.getMonth() + 1)
                + "-" + newData.start_date.getDate()
              let house = newData
              house.start_date = date
              await createHouse(house)
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(async () => {
              resolve();
              const data = [...state.data];
              await deleteHouse(oldData.identifier)
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
