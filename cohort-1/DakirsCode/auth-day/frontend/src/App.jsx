import React from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import { cpus } from "os";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    loginUsername: "",
    loginPasswor: ""
  };

  componentDidMount() {
    fetch("http://localhost:5000/test", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ from: "frontend" })
    })
      .then(rawJSON => {
        return rawJSON.json();
      })
      .then(data => {
        console.log(data.backend);
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3> sign up </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <form>
              <FormGroup>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={this.state.username}
                  onChange={event => {
                    console.log(event.target.value);
                    this.setState({ username: event.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  onChange={event => {
                    console.log(event.target.value);
                    this.setState({ passwrod: event.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm-password">confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  value={this.state.confirmPassword}
                  onChange={event => {
                    console.log(event.target.value);
                    this.setState({ confirmPassword: event.target.value });
                  }}
                />
              </FormGroup>
              <Button color="success">Sign up</Button>
            </form>
          </Col>
          <Col />
          <Col>
            <h3> Login</h3>
            <form>
              <FormGroup>
                <label htmlFor="loginUsername">Login User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="loginUsername"
                  value={this.state.loginUsername}
                  onChange={event => {
                    console.log(event.target.value);
                    this.setState({ loginUsername: event.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="loginPassword">Login Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  value={this.state.loginPassword}
                  onChange={event => {
                    console.log(event.target.value);
                    this.setState({ loginPasswrod: event.target.value });
                  }}
                />
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
