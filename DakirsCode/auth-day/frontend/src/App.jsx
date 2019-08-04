import React from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";

export default class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:5000/test", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ hello: "world" })
    })
      .then(rawJSON => {
        return rawJSON.json();
      })
      .then(data => {
        console.log(data.dakir);
      });
  }
  render() {
    return (
      <Container>
        <h3> sign up </h3>
        <form>
          <FormGroup>
            <label htmlFor="username">username</label>
            <input type="text" className="form-control" id="username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">password</label>
            <input type="password" className="form-control" id="password" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirm-password">confirm password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
            />
          </FormGroup>
        </form>
        <Button color="success">Sign up</Button>
      </Container>
    );
  }
}
