import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import FeaturedArt from "./FeaturedArt";
import FeaturedNews from "./FeaturedNews";
import FeaturedMerch from "./FeaturedMerch";

export default class WelcomePage extends React.Component {
	render() {
		const buttonSpacing = {
			padding: "0 0 10 10"
		};
		return (
			<div className="WelcomePage-Main">
				<div className="WelcomePage-Slogan">
					<h1>Canvas Your Home</h1>
					<h3>HandPainted Artwork, where you need it</h3>
				</div>

				<div className="artwork">
					<FeaturedArt />
				</div>
				<div className="artist">
					<FeaturedNews />
				</div>
				<div className="request">
					<FeaturedMerch />
				</div>
			</div>
		);
	}
}
