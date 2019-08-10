import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

function Header() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Navbar color="dark" dark fixed="top" expand="sm">
				<NavLink tag={Link} to="/">
					<span className="text-warning">bight</span>
				</NavLink>
				<NavbarToggler onClick={() => setOpen(!open)} />
				<Collapse isOpen={open} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink tag={Link} to="/inventory">
								Inventory
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/shipment">
								Shipment
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
export default Header;
