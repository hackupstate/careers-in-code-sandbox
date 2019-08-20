import React from "react";
import {Container, Row, Col} from "reactstrap";

export default class ArtistPage extends React.Component {
	state = {products: []};

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<div className="text-center">
							<h1>The Artist-Rashad Mustafa</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<p>this is a paragraph about the artist</p>
					</Col>
					<Col md={6}>
						{this.state.products.map(product => {
							return (
								<div className="canvas">
									<img
										src="https://s3.us-east-2.amazonaws.com/canvasyourhome.art/images/the+artist.jpg"
										alt="artwork"
									/>
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		);
	}
}
