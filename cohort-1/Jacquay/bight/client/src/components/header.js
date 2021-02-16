import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

function Header() {
    const [open, setOpen] = useState(false);
    return (
    <div>
        <Navbar color="dark" fixed="top" dark expand="md">
          <NavbarBrand href="/">
            <span className="text-warning">bight</span></NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!open)} />
          <Collapse isOpen={open} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/inventory">Inventory</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/shipment">shipments</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    )
}

export default Header;