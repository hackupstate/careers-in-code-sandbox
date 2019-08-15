import React from "react";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router, Route } from "react-router-dom";
import Inventory from "./Inventory";
import Shipments from "./Shipments";
import Product from "./Product";

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
        </div>
      </Router>
    </div>
  );
}

export default App;
