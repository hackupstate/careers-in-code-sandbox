import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import FeaturedArt from "./FeaturedArt";

export default class WelcomePage extends React.Component {
	render() {
		const buttonSpacing = {
			padding: "0 0 10 10"
		};
		return (
			<div className="WelcomePage-Main">
				{/* <h1>Canvas Your Home Headquarters</h1> */}
				<div className="WelcomePage-Buttons">
					<Button
						style={buttonSpacing}
						className="btn btn-danger btn-lg m-2"
						href="./Artwork.jsx">
						Artwork
					</Button>
					<Button className="btn btn-warning btn-lg m-4" href="./WelcomePage">
						T-Shirts and Hoodies
					</Button>
				</div>
				<div className="artwork">
					<FeaturedArt />
				</div>
				<div className="artist">
					<FeaturedArt />
				</div>
				<div className="request">
					<FeaturedArt />
				</div>
			</div>
		);
	}
}
