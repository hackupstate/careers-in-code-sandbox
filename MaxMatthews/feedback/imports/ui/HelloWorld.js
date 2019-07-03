import React, { Component } from "react";

export default class HelloWorld extends Component {
	render() {
		// console.log(this.props.feedback);
		return (
			<div className="container">
				<h1>HelloWorld</h1>
				<img src="/cat.jpeg" />
			</div>
		);
	}
}
