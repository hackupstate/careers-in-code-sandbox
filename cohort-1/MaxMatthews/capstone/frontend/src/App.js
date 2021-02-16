import React, { Component } from "react";
import { Container } from "reactstrap";

class App extends Component {
	state = { users: [] };

	componentDidMount() {
		fetch("/users", { method: "GET" })
			.then(rawJSON => {
				return rawJSON.json();
			})
			.then(data => {
				console.log(data.users);
				this.setState({ users: data.users });
			});

		fetch("http://localhost:5000/user", {
			method: "PUT",
			body: JSON.stringify({ name: "Mary Jane" }),
			headers: { "Content-Type": "application/json" }
		})
			.then(rawJSON => {
				return rawJSON.json();
			})
			.then(data => {
				console.log(data.users);
				this.setState({ users: data.users });
			});
	}

	render() {
		return (
			<div className="App">
				<Container>
					<h1>Hello World</h1>
					<ul>
						{this.state.users.map(user => {
							return <li key={user.id}>{user.name}</li>;
						})}
					</ul>
				</Container>
			</div>
		);
	}
}

export default App;
