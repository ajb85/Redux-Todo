import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, toggleTask, clearComplete, deleteTask } from "./actions";
import "./App.css";

class App extends Component {
  onTaskSubmit = e => {
    e.preventDefault();
    this.props.addTask(e.target.firstChild.value);
    e.target.firstChild.value = "";
  };
  render() {
    const list = this.props.todo.map((item, i) => {
      let style = {
        fontSize: "18px",
        width: "200px",
        cursor: "pointer",
        display: "flex"
      };
      if (item.complete) {
        style.textDecoration = "line-through";
      }
      return (
        <li style={style}>
          <p onClick={() => this.props.toggleTask(i)}>{item.value}</p>{" "}
          <button
            style={{
              backgroundColor: "transparent",
              color: "red",
              border: "transparent"
            }}
            type="button"
            onClick={() => this.props.deleteTask(i)}
          >
            X
          </button>
        </li>
      );
    });
    const ulStyle = { width: "200px", margin: "auto" };
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ul style={ulStyle}>{list}</ul>
        <form onSubmit={e => this.onTaskSubmit(e)}>
          <input type="text" />
        </form>
        <button type="submit" onClick={() => this.props.clearComplete()}>
          Clear Completed Tasks
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todo: state.todo };
};

export default connect(
  mapStateToProps,
  { addTask, toggleTask, clearComplete, deleteTask }
)(App);
