import React from 'react'; // create react app lets use 'import' instead of 'require'
// equivalent require syntax: const React = require('react')
import {
  Navbar,
  NavbarBrand,
  Container } from 'reactstrap';
import logo from '../../assets/images/opossum.png'; // create-react-app sets up a loader in the background to handle importing things like images
import './style.css'; // and also style sheets!
import TodoList from '../../components/TodoList'; // we can also import our own modules directly from 

// TodoApp is the top-level display component of the app
// It doesn't have any state, it just lays out our navbar and container for the TodoList
// Because it has no state, it's a Functional Component, it can just return JSX

// export default means when we try to import this module, we don't need to do object deconstruction to assign it
// for example we can just do import TodoApp from '../../components/TodoApp' instead of import {TodoApp} from '../../components/TodoApp'
export default () =>
    <div className="TodoApp">
        <Navbar className="main-nav" color="dark" dark expand="sm"> 
          <NavbarBrand href="/"><img src={logo} alt="The Todos Deluxe logo" width="64" height="64"/>Todos Deluxe</NavbarBrand>
        </Navbar>
      <Container>
        <TodoList />
      </Container>
    </div>