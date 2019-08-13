import React from "react";
import {Container, Row, Col} from "reactstrap";
import {Route, Switch} from "react-router-dom";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import RequestForm from "./RequestForm";
import Artwork from "./Artwork";
import ArtistPage from "./ArtistPage";
import "../styles/app.css";

export default class App extends React.Component {
	componentDidMount() {
		console.log("compoenent mounted");
	}
	render() {
		return (
			<Container className="app">
				<Row>
					<Col>
						<NavBar />
					</Col>
				</Row>
				<Row>
					<Col sm="12" md={{size: 6, offset: 3}}>
						.col-sm-12 .col-md-6 .offset-md-3
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="content">
							<Switch>
								<Route path="/RequestForm" component={RequestForm} />
								<Route path="/Artwork" component={Artwork} />
								<Route path="/ArtistPage" component={ArtistPage} />
								<Route path="/" exact component={WelcomePage} />
							</Switch>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
