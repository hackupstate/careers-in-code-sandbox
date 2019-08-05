import React from "react";
import ReactDOM from "react-dom";

export default class Counter extends React.Component {
  state = {
    count: 1,
    tags: [
      /*"tag1", "tag2", "tag3"*/
    ]
  };

  //imageUrl: "https://picsum.photos/200"
  styles = {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow"
  };

  handleIncrement = () => {
    console.log("Increment Clikced", this);
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTags()}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment
        </button>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

// inline styling of react components style={{insert style}}
