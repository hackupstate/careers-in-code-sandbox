import React from "react";
import { ListGroup, ListGroupItem, Row, Col, Button } from "reactstrap";

function ShipmentsList(props) {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col sm="2">ID</Col>
            <Col sm="3">PRODUCT</Col>
            <Col sm="2">QTY</Col>
            <Col />
          </Row>
        </ListGroupItem>
        {props.shipments.map(shipment => (
          <ListGroupItem key={shipment.id}>
            <Row>
              <Col sm="2">{shipment.id}</Col>
              <Col sm="3">{shipment.product}</Col>
              <Col sm="2">{shipment.quantity}</Col>
              <Col sm="5">
                {!shipment.isReceived ? (
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      alert("Not yet implemented");
                    }}
                  >
                    Receive
                  </Button>
                ) : (
                  <span>Received</span>
                )}
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      <pre>{JSON.stringify(props.shipments, null, 2)}</pre>
    </div>
  );
}

export default ShipmentsList;
