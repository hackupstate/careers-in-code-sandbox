import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import "../styles/WelcomePage.css";

export default class WelcomePage extends React.Component {
	render() {
		return (
			<Container className="WelcomePage">
				<Row>
					<Row>
						<Col>
							<h1>Canvas Your Home Headquarters</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button
								className="btn btn-secondary btn-lg m-2"
								href="./Artwork.jsx">
								Artwork
							</Button>
							<Button
								className="btn btn-secondary btn-lg m-2"
								href="./WelcomePage">
								T-Shirts and Hoodies
							</Button>
						</Col>
					</Row>
				</Row>
			</Container>
		);
	}
}
