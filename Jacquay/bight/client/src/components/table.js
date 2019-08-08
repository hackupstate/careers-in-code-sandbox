import React from "react";

function Table({data}) {
  function renderHead() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>PRODUCT</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return (
        <tbody>
            {data.map(function(item, itemIdex){
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product}</td>
                        <td>{item.quantity}</td>
                    </tr>
                )
            })
        }
        </tbody> 
    );
  }

  return (
    <div>
        <table className="table">
      {renderHead()}
      {/* renderBody() */}
        </table>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Table;