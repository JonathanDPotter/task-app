import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      activeTask: "",
    };
  }

  render() {
    return <div id="hello">Hello World</div>;
  }
}

export default App;
