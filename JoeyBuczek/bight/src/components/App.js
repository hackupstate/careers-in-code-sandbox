import React, { useState, useReducer } from "react";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Inventory from "./Inventory";
import Shipments from "./Shipments";
import Product from "./Product";
import About from "./About";
import { AppStore } from "../stores/AppStore";
import { ThemeProvider } from "../stores/Context";
import { ContextStore } from "../stores/ContextStore";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="photo-bg">
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/shipments" component={Shipments} />
          <Route path="/product/:id" component={Product} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
