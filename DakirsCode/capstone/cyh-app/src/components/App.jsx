import React from "react";
import {Container, Row, Col} from "reactstrap";
import {Route} from "react-router-dom";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import RequestForm from "./RequestForm";
import Artwork from "./Artwork";
import ArtistPage from "./ArtistPage";
import "../styles/MainPage.css";

export default class MainPage extends React.Component {
	componentDidMount() {
		console.log("compoenent mounted");
	}
	render() {
		return (
			<Container className="MainPage">
				<Row>
					<Col>
						<NavBar />
						{/* <nav>This is Canvas Your Home Headquarters</nav> */}
					</Col>
				</Row>
				<Row>
					<Col>{/* {" "}
						<WelcomePage />{" "} */}</Col>
				</Row>
				<Col>
					<div className="content">
						<Route path="/RequestForm" component={RequestForm} />
						<Route path="/Artwork" component={Artwork} />
						<Route path="/ArtistPage" component={ArtistPage} />
					</div>
				</Col>
				<Row />
			</Container>
		);
	}
}
