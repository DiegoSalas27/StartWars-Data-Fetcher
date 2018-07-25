import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

const FecthTable = ({ data }) => {

  function  getColumns() {
    return Object.keys(data).map(key => {
        return {
        Header: key,
        accessor: key
        };
    });
  }

 return(
  <div>
    <ReactTable className='pa4 mt5'
      data={[data]}
      columns={getColumns()}
      defaultPageSize={3}
    />
  </div>
  ); 
}

export default FecthTable;