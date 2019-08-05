import React from 'react';

import './App.css';
import StatefulComponent from './StatefulComponent';
import FirstComponent from './FirstComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <StatefulComponent />
      <FirstComponent text="Showing props working 2"/>
      <FirstComponent text="Really im' the second component"/>
      <FirstComponent text="Im the baby" />
    </div>
  );
}

export default App;
