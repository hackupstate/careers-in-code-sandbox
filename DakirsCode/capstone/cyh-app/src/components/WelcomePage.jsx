import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

export default class WelcomePage extends React.Component {
  render() {
    const buttonSpacing = {
      padding: "0 0 10 10"
    };
    return (
      <div className="WelcomePage">
        {/* <h1>Canvas Your Home Headquarters</h1> */}
        <div className="welcome-buttons">
          <Button
            style={buttonSpacing}
            className="btn btn-danger btn-lg m-2"
            href="./Artwork.jsx"
          >
            Artwork
          </Button>
          <Button className="btn btn-warning btn-lg m-4" href="./WelcomePage">
            T-Shirts and Hoodies
          </Button>
        </div>
      </div>
    );
  }
}
