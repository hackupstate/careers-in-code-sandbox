import React from "react";
// import { Container, Row, Col } from "reactstrap";
import {Route, Switch} from "react-router-dom";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import RequestForm from "./RequestForm";
import Artwork from "./Artwork";
import ArtistPage from "./ArtistPage";
import FeaturedArt from "./FeaturedArt";

export default class App extends React.Component {
	componentDidMount() {
		console.log("compoenent mounted");
	}
	render() {
		return (
			<div className="app">
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/RequestForm" component={RequestForm} />
						<Route path="/Artwork" component={Artwork} />
						<Route path="/ArtistPage" component={ArtistPage} />
						<Route path="/" exact component={WelcomePage} />
					</Switch>
				</div>
			</div>
		);
	}
}
