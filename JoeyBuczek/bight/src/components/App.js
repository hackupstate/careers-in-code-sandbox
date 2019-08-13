import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { updateBrand } from "../actions/actionCreators";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark fixed="top" expand="sm">
        <NavbarBrand href="/">
          <span className="text-warning">{props.appState.brand}</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/inventory">
                {props.appState.inventoryLink}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/shipments">
                Shipments
              </NavLink>
            </NavItem>
            <button
              onClick={() => {
                updateBrand(props.dispatch);
              }}
            >
              Change Brandname
            </button>
            <button
              onClick={() => {
                props.dispatch({
                  type: "UPDATE_INVENTORY_LINK",
                  payload: "Inventory"
                });
              }}
            >
              Change Inventory Link Text
            </button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
