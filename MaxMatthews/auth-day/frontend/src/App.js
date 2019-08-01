import React, { Component } from "react";
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
		// fetch("http://localhost:5000/test", {
		// 	method: "POST",
		// 	headers: { "Content-type": "application/json" },
		// 	body: JSON.stringify({ hello: "world" })
		// })
		// 	.then(rawJSON => {
		// 		return rawJSON.json();
		// 	})
		// 	.then(data => {
		// 		console.log(data.world);
		// 	});
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

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h3>Create Account</h3>
						<form>
							<FormGroup>
								<label htmlFor="username">Username:</label>
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
									onChange={this.onPasswordChange}
								/>
							</FormGroup>
							<FormGroup>
								<label htmlFor="confirmPassword">Confirm Password:</label>
								<input
									type="password"
									className="form-control"
									id="confirmPassword"
									value={this.state.confirmPassword}
									onChange={evt => {
										this.setState({ confirmPassword: evt.target.value });
									}}
								/>
							</FormGroup>
							<Button color="success" onClick={this.createAccount}>
								Create Account
							</Button>
						</form>
					</Col>
					<Col>
						{this.state.error ? (
							<p style={{ color: "red" }}>{this.state.error}</p>
						) : null}
						<h3>Login</h3>
						<form>
							<FormGroup>
								<label htmlFor="username">Username:</label>
								<input
									type="text"
									className="form-control"
									id="username"
									value={this.state.loginUsername}
									onChange={evt => {
										this.setState({ loginUsername: evt.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<label htmlFor="password">Password:</label>
								<input
									type="password"
									className="form-control"
									id="password"
									value={this.state.loginPassword}
									onChange={evt => {
										this.setState({ loginPassword: evt.target.value });
									}}
								/>
							</FormGroup>
							<Button color="success" onClick={this.login}>
								Login
							</Button>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
}
