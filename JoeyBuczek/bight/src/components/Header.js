import React, { useState, useEffect, useReducer } from "react";
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
import { useAppStore } from "../stores/AppStore";
import { useThemeContext } from "../stores/Context";
import { useContextStore } from "../stores/ContextStore";

// const initialState = {
//   brand: "initial brand",
//   inventoryLink: "initial link",
//   counter: 0
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_BRAND":
//       return { ...state, brand: action.payload };

//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };

//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };

//     default:
//       return state;
//   }
// }

function Header(props) {
  const [open, setOpen] = useState(false);
  // const [brand, setBrand] = useState("initial brand");
  // const store = useAppStore();
  //const [appState, dispatch] = useReducer(reducer, initialState);
  //const value = useThemeContext();
  //const value = useContextStore();

  return (
    <div>
      <Navbar color="dark" dark fixed="top" expand="sm">
        <NavbarBrand href="/">
          <span className="text-warning">bight</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/inventory">
                Inventory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/shipments">
                Shipments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
