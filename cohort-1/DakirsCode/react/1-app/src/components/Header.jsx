import React from 'react';
import logo from '../assets/logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'


export default class Header extends React.Component {
  render(){
    let color ="danger";
    return (
      <div>
         <Navbar className="main-nav" color={color} dark expand="lg"> 
          <NavbarBrand href="/"><img src={logo} alt="The Todos app" width="64" height="64"/>{this.props.title}</NavbarBrand>
        </Navbar>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </div>
    );
  }
}
