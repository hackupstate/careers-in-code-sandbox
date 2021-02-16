import React, { useState } from "react";
import { Link } from "react-router-dom";

function sortObjectArray(data, column, order) {
  // Return sorted array only if a column is provided,
  // otherwise return the data as-is
  return !column
    ? data
    : data.sort((a, b) => {
        let obj1 = order === "asc" ? a : b;
        let obj2 = order === "asc" ? b : a;
        if (obj1[column] > obj2[column]) {
          return 1;
        }
        if (obj1[column] < obj2[column]) {
          return -1;
        }
        return 0;
      });
}

function Table({ data = [], sortColumn = "product", sortOrder = "asc" }) {
  const [order, setOrder] = useState(sortOrder);
  const [column, setColumn] = useState(sortColumn);

  if (data.length > 0 && sortColumn) {
    data = sortObjectArray(data, column, order);
  }
  // 🔼🔽
  function renderHead() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>
            <div
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => {
                setColumn("product");
              }}
            >
              PRODUCT
            </div>{" "}
            <div style={{ cursor: "pointer", display: "inline-block" }}>
              {column === "product" ? (
                order === "asc" ? (
                  <span onClick={() => setOrder("desc")}>🔼</span>
                ) : (
                  <span onClick={() => setOrder("asc")}>🔽</span>
                )
              ) : null}
            </div>
          </th>
          <th>
            <div
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => {
                setColumn("quantity");
              }}
            >
              QUANTITY
            </div>{" "}
            <div style={{ cursor: "pointer", display: "inline-block" }}>
              {column === "quantity" ? (
                order === "asc" ? (
                  <span onClick={() => setOrder("desc")}>🔼</span>
                ) : (
                  <span onClick={() => setOrder("asc")}>🔽</span>
                )
              ) : null}
            </div>
          </th>
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return (
      <tbody>
        {data.map(function(item, itemIndex) {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/product/${item.id}`}>{item.product}</Link>
              </td>
              <td>{item.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  return (
    <div>
      <table className="table">
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}

export default Table;
