import React, { Component } from "react";
import ReactDOM from "react-dom";

import { withTracker } from "meteor/react-meteor-data";
import { Feedback } from "../api/feedback";
import moment from "moment";
import AccountsUIWrapper from "./AccountsUIWrapper";
import { Meteor } from "meteor/meteor";

class App extends Component {
  state = { filteredResults: [] };

  createFeedback = event => {
    event.preventDefault();
    const studentID = ReactDOM.findDOMNode(this.refs.studentID).value;
    const message = ReactDOM.findDOMNode(this.refs.message).value;

    Feedback.insert({ studentID, message: message, timestamp: new Date() });

    ReactDOM.findDOMNode(this.refs.message).value = "";
    ReactDOM.findDOMNode(this.refs.studentID).value = "";
  };

  editFeedback = feedbackID => {
    const updatedFeedback = window.prompt(
      "What would you like your feedback to be updated to?"
    );

    Meteor.call("feedback.update", feedbackID, updatedFeedback);
  };

  deleteFeedback = feedbackID => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your feedback"
    );

    if (confirmDelete) {
      Meteor.call("feedback.remove", feedbackID);
    }
  };

  filterStudents = event => {
    const filterName = event.target.value;

    const filteredResults = this.props.feedback.filter(feedback => {
      if (feedback.studentID.includes(filteredName)) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ filteredResults });
  };

  generateTableRow = feedback => {
    return (
      <tr key={feedback._id}>
        <td>{feedback.studentID}</td>
        <td>{feedback.message}</td>
        <td>{moment(feedback.timestamp).format("L")}</td>
        <td>
          <button 
          className="btn btn-primary"
          onClick={this.editFeedback.bind(this, feedback._id)}>
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.deleteFeedback.bind(this, feedback._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <div className="container">
        <a href="/helloWorld">Hello World</a>
        <AccountsUIWrapper />
        {this.props.currentUser ? (
        <div>
        <form onSubmit={this.createFeedback}>
          <div className="row">
            <div className="col-md">
              <div className="form-group">
                <label>Message:</label>
                <input className="form-control" ref="message" />
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <label>Student ID:</label>
                <input className="form-control" ref="studentID" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                Save feedback
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Message</th>
                  <th>Timestamp</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredResults.length > 0 ? this.state.filteredResults.map(feedback => {
                  return this.generateTableRow(feedback);
                }): this.props.feedback.map(feedback => {
                  return this.generateTableRow(feedback);
                })}
              </tbody>
            </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <label>Filter by student:</label>
            <input ref="filterStudent" className="form-control" onChange={this.filterStudents}/>
          </form>
        </div>
        </div>
      </div>
    ) : null}
    </div>
    );
}
}

export default withTracker(() => {
  Meteor.subscribe("feedback");

  return {
    feedback: Feedback.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(App);
