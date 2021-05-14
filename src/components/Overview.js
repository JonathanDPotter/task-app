import "./overview.css";
import React, { Component } from "react";

class Overview extends Component {


  render() {
    return <ul id="task-list">
      {this.props.tasks.map((task, i) => <li value={task} key={i}>{task}</li>)}
    </ul>;
  }
}
export default Overview;
