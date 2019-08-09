import React, { useState, useEffect } from "react";
import ShipmentsList from "./ShipmentsList";

function Shipments() {
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/shipments")
      .then(response => response.json())
      .then(shipmentData => setShipments(shipmentData));
  }, []);
  return (
    <div className="shipments-page">
      <h4>Shipments</h4>
      <ShipmentsList shipments={shipments} />
    </div>
  );
}

export default Shipments;
