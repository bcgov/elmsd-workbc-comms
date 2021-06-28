import React from 'react';

const TableHeader = (props) => {
  const { headers } = props;
  const {schema} = props;
  return(
    <thead className="thead-dark" key="header-1">
        <tr key="header-0">
          { schema && schema.map((value, index) => {
              return <th key={index}><div>{headers[0][value]}</div></th>
          })}
        </tr>
    </thead>
  );
}

export default TableHeader;