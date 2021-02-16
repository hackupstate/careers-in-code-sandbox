import React from "react";
import {Container, Row, Col} from "reactstrap";

const ArtistPage = () => {
	return (
		<div id="artist-L1-main">
			<div id="artist-L2-artist-info">
				<div id="artist-L3-pic">
					{/* <img
						id="artist-pic"
						src="https://s3.us-east-2.amazonaws.com/canvasyourhome.art/images/the+artist.jpg"
						alt=""
					/> */}
				</div>
				<div id="artist-L3-contact">
					<h1>Rashad Mustafa Artist , Founder And Ceo</h1>
					<p>email</p>
					<p>phone number</p>
					<p>
						Born in Syracuse New York I found a love for art at a young age.
						started sketching my favorite characters. I then started taking as
						many art classes as I could while in school. After school I stopped
						for a while just trying to pay off student loans. Then I had my son
						and I found myself with some free time as he was getting older. we
						would hang in my man cave for hours. then I decided to decorate.
						after seeing how much posters and pictures cost I decided to
						decorate with my own art
					</p>
				</div>
			</div>
			{/* <div id="artist-L2-bio" className="text-center" /> */}
		</div>
	);
};
export default ArtistPage;
