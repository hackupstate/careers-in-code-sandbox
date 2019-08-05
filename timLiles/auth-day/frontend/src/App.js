import React, {Component} from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    state = {
      username: "",
      password: "",
      confirmPassword: "",
      loginUsername: "",
      loginPassword: ""
    };
  
  componentDidMount() {
    // fetch("http://localhost/test", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({ hello: "world" })
    // })
    //   .then(rawJSON => {
    //     return rawJSON.json();
    //   })
    //   .then(data => {
    //     console.log(data.world);
    //   });
  }

  onPasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };
  
  createAccount = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match");
    } else if (
      !this.state.password ||
      !this.state.username ||
      !this.state.confirmPassword
    ) {
      alert("Missing form fields");
    } else {
      fetch("http://localhost:5000/createAccount", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(rawJSON => {
        return rawJSON.json();
      })
      .then(data => {
        console.log(data);
      });
    }
  };

  login = () => {
    if (!this.state.loginPassword || !this.state.loginUsername) {
      alert("Missing form fields");
    } else {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.loginUsername,
          password: this.state.loginPassword
        })
      })
      .then(rawJSON => {
        return rawJSON.json();
      })
      .then(data => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({ error: null });
        }
        console.log(data);
      });
    }
  };

  render(){
  return (
    <Container>
      <Row>
        <Col>
      <h3>Create Account</h3>
      <form>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input 
          type="text" 
          className="form-control" 
          id="username" 
          value={this.state.username} 
          onChange={evt => {
            console.log(evt.target.value);
            this.setState({ username: evt.target.value });
          }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          className="form-control" 
          id="password"
          value={this.state.password}
           />

        </FormGroup>
        <FormGroup>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
          type="password" 
          className="form-control" 
          id="confirmPassword" 
          value={this.state.confirmPassword}
          onchange={evt => {
            this.setState({confirmPassword: evt.target.value});
          }/>
        </FormGroup>
        <FormGroup>
          <Button color="success">Create Account</Button>
        </FormGroup>
      </form>
    </Container>
  );
  };
}

