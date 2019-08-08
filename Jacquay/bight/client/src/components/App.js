import React from 'react';
import Header from './header';
import Home from './Home';
import inventory from './inventory'; 
import shipments from './shipments'; 


import { HashRouter as Router, Route } from 'react-router-dom';

function App(){
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="photo-bg">
          <Route exact path= "/" component={Home} />
          <Route path= "/inventory" component={inventory} />
          <Route path= "/shipments" component={shipments} />
        </div>
      <p>super awesome fun</p>
      </Router>
    </div>
  );
}

export default App;
