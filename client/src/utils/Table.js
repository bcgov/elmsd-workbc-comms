import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {
  const { headers, rows, handleShow, handleContinue } = props;
  return (
    <div>
      <table className="table table-bordered table-hover">
      <TableHeader schema={Object.keys(headers[0])} headers={headers}></TableHeader>
      <TableBody 
        headers={Object.keys(headers[0])} 
        rows={rows} 
        handleShow={handleShow}
        handleContinue={handleContinue}
      >
      </TableBody>
      </table>
    </div>
  );
}

export default Table;