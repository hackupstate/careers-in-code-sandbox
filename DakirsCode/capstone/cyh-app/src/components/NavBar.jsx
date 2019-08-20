import React from "react";
import {
	Container,
	Row,
	Col,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink,
	Nav
} from "reactstrap";
import WelcomePage from "./WelcomePage";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: true
		};
	}

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="sm">
					<NavbarBrand href="/">{<span>Canvas Your Home</span>}</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/Artwork/">Art Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/ArtistPage/">The Artist</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/RequestForm/">Request Artwork</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
