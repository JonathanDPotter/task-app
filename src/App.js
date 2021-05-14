import React, { Component } from "react";
import Overview from "/home/jonathan/code/task-app/src/components/Overview.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: "",
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    const { tasks, currentTask } = this.state;
    let newTasks = tasks.map(a => a);
    newTasks.push(currentTask);
    this.setState((state) => ({
      tasks: newTasks,
      currentTask: "",
    }));
  }

  handleChange(event) {
    this.setState({ currentTask: event.target.value });
  }

  render() {
    return (
      <div id="full-page">
        <form id="form" onSubmit={this.addTask}>
          <input
            type="text"
            name="task-input"
            value={this.state.currentTask}
            onChange={this.handleChange}
          ></input>
          <input
            id="input-label"
            type="submit"
            value="Enter a new Task"
          ></input>
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
