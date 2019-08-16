import React, { useState, useEffect } from "react";
import Table from "./Table";
//import { useAppStore } from "../stores/AppStore";

function Inventory() {
  //const store = useAppStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    //store.dispatch({ type: "LOAD_INVENTORY" });
    fetch("http://localhost:3001/inventory")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div className="inventory-page">
      <h4>Inventory</h4>
      <Table data={data} sortOrder="asc" sortColumn="product" />
    </div>
  );
}

export default Inventory;
