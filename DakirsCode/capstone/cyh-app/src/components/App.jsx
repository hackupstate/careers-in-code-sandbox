import React from "react";
//import { Container, Row, Col } from "reactstrap";
//import logo from './logo.svg';
import NavBar from "./NavBar";
import "../styles/MainPage.css";
import WelcomePage from "./WelcomePage";

export default class MainPage extends React.Component {
  componentDidMount() {
    console.log("compoenent mounted");
  }
  render() {
    return (
      <container className="MainPage">
        <row>
          <NavBar />
          {/* <nav>This is Canvas Your Home Headquarters</nav> */}
        </row>
        <row>
          {" "}
          <WelcomePage />{" "}
        </row>
      </container>
    );
  }
}
