import React from "react";
import { Container, Row, Col } from "reactstrap";

import SignIn from "./SignIn";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Col>
              <h1>Dewit Rotary Sign</h1>
            </Col>
            <SignIn />
          </Col>
        </Row>
      </Container>
    );
  }
}
