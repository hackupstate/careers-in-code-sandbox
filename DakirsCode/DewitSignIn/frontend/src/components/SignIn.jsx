import React from "react";
import {Container, Row, Col, FormGroup, Button} from "reactstrap";
import {cpus} from "os";
import "../app.css";

export default class App extends React.Component {
	state = {
		name: "",
		password: "",
		confirmPassword: "",
		loginUsername: "",
		loginPasswor: ""
	};

	componentDidMount() {
		fetch("http://localhost:5000/test", {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({from: "frontend"})
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
			<div className="topbox">
				<h1> sign in </h1>

				<form>
					<FormGroup>
						<label htmlFor="name">name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={this.state.name}
							onChange={event => {
								console.log(event.target.value);
								this.setState({name: event.target.value});
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
								this.setState({passwrod: event.target.value});
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
								this.setState({confirmPassword: event.target.value});
							}}
						/>
					</FormGroup>
					<Button color="success">Sign up</Button>
				</form>
			</div>
		);
	}
}
