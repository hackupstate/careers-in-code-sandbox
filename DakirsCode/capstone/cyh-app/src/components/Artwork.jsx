import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Artwork extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>artwork</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
