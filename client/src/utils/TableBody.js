import React from 'react';

const TableBody = (props) => {
  const { headers, rows } = props;
  const columns = headers ? headers.length : 0;
  const showSpinner = rows === null;
  const {handleShow} = props;
  const {handleContinue} = props;
  const {handleResend} = props;
  
  function buildRow(row, headers, itemIndex) {
    //console.log(itemIndex)
    return (
         <tr key={itemIndex}>
         { headers.map((value, index) => {
           //console.log(itemIndex + "_" + index)
            if (value === "continue") {
              return <td key={itemIndex + "_" + index}><button className="btn btn-primary" onClick={(e) => handleContinue(itemIndex)}>Continue</button></td>
            } else if (value === "_id"){
             return <td key={itemIndex + "_" + index}>{row[value].substring(5,10)}</td>
            } else if (value === "delete"){
              return <td key={itemIndex + "_" + index}><button className="btn btn-secondary" disabled>TBA</button></td>
            } else if (value === "preview"){
              return <td key={itemIndex + "_" + index}><button className="btn btn-secondary" onClick={(e) => handleShow(itemIndex)}>Preview</button></td>
            } else if (value === "resend"){
              return <td key={itemIndex + "_" + index}><button className="btn btn-primary" onClick={(e) => handleResend(itemIndex)}>Resend</button></td>
            } else {
             return <td key={itemIndex + "_" + index}>{row[value]}</td>
            }
          })}
         </tr>
     )
  };

  return(
    <tbody>
        {showSpinner &&
          <tr key="spinner-0">
              <td colSpan={columns} className="text-center">
                  <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
              </td>
          </tr>
          }
        { !showSpinner && rows && rows.map((value,itemIndex) => {
              return buildRow(value, headers, itemIndex);
          })}
    </tbody>
  );
}

export default TableBody;