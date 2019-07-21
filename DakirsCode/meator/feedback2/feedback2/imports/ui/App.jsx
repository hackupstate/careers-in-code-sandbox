import React,{Component} from 'react';
import ReactDOM from "react-dom";
import {withTracker} from "meteor/react-meteor-data";
import {Feedback} from "../api/feedback";
//thisis the front end of our app
class App extends Component {
  createFeedback = event => {
    event.preventDefault();
    const studentID = ReactDOM.findDOMNode(this.refs.studentID).value;
    const message = ReactDOM.findDOMNode(this.refs.message).value;
    //console.log(message,studentID);
    //here we create or update the database with the data collected from the front end using refs
    Feedback.insert({studentID, message, timestamp:new Date()})

    ReactDOM.findDOMNode(this.refs.studentID).value = "";
    ReactDOM.findDOMNode(this.refs.message).value;
  };
  //everything in render gets put on the screen
  render(){
    //this just checks the connection between mongo and our front end
    //console.log(this.props.feedback);
    return(
      //the main container for the UI
  <div className="container">
    <form onSubmit={this.createFeedback}>
    {/* THIS row holds the message input and the student ID input in seperate col */}
      <div className ="row">
        {/* first column */}
        <div className="col-md">
          <div className="form-group">
            <label>Message:</label>
            <input className="form-control" ref="message"/>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-md">
          <div className="form-group">
            <label>Student ID:</label>
            {/* here the ref is for reactDOM to come and grab the data*/}
            <input className="form-control" ref="studentID"/>
          </div>
        </div>
      </div>{/*end of first row*/}


      <div className="row">
        <div className="col text-center">
      {/* The second row starts here */} 
          <button type="submit"className="btn btn-primary">Save Feedback</button>
        </div>
      </div>{/*End of second row-button row*/}
    </form>
    <div className="row">
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {/*Here we are building our html right inline as we go through the data*/}
            {/*this is where we are READING THE DATA FROM THE DATABASE and putting on the fron end*/}
            {this.props.feedback.map(feedback => {
              return(
              <tr>  
                <td>{feedback.studentID}</td>
                <td>{feedback.message}</td>               
              </tr>
              );
              })}
          </tbody>
        </table>
      </div>
    </div>{/* end of third row-table row*/}
  </div> ///* end of container div*/

    )//this is the end of the return
  }//This is the end of the render
}//end of the component
  

export default withTracker(() =>{
  return{
    //this is a call to the mongo database
    feedback: Feedback.find({}).fetch()
  };
})(App); 
