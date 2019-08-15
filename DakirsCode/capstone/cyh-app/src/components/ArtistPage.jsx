import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class ArtistPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="artistBio">
              <h1>The Artist-Rashad Mustafa</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>this is a paragraph about the artist</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
