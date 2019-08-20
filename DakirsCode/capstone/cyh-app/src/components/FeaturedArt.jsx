import React from "react";
import {Button} from "reactstrap";
//what I want-selected artwork that will be displayed on the landing page.
//how-parent div and multiple divs dynamically rendered as pictures come in
//    and styled using flex

const FeaturedSection = () => {
	const buttonSpacing = {
		padding: "0 0 10 10"
	};
	return (
		<div className="FeaturedArt-Main">
			<div className="FeaturedArt-Child1">
				<h1>featured child 1</h1>
				<div className="WelcomePage-Buttons">
					<div className="Artwork-Button">
						<Button
							style={buttonSpacing}
							className="btn btn-danger btn-lg m-2"
							href="./Artwork.jsx">
							Artwork
						</Button>
					</div>
					<div className="Merch-Button">
						<Button className="btn btn-warning btn-lg m-4" href="./WelcomePage">
							Apperal
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeaturedSection;
