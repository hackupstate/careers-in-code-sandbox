import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-media-data';
import { Feedback } from "../api/feedback";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> Welcome to Meteor! </h1>
      </div>
    );
  }
}

render() {
  return (
    <div className="Container">
      <form >

      </form>
    </div>
  )
};

export default withTracker(() => {
  return {
    feedback: Feedback.find({}).fetch()
  };
})(App);
