import React from "react";
//import { Container, Row, Col } from "reactstrap";
import "../styles/WelcomePage.css";

export default class WelcomePage extends React.Component {
  render() {
    return (
      <container className="WelcomePage d-flex justify-content-center">
        <row>
          <h1>Canvas Your Home Headquarters</h1>
        </row>
        <row>
          <rol>
            <a className="btn btn-secondary btn-lg m-2" href="./Artwork.jsx">
              Artwork
            </a>
            <a className="btn btn-secondary btn-lg m-2" href="./WelcomePage">
              T-Shirts and Hoodies
            </a>
          </rol>
          <rol />
        </row>
      </container>
    );
  }
}
