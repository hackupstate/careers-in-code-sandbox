import React, { useState, useEffect } from "react";
import Table from "./table";


function Inventory () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/inventory')
            .then(response => response.json())
            .then(json => setData(json));
    }, [])

    return (
        <div className="inventory-page">
        <h4>
            Inventory
        </h4>
        <Table data={data}/>
            
        </div>
    );
}

export default Inventory;