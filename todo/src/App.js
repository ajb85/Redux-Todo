import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, toggleTask, clearComplete, deleteTask } from "./actions";
import "./App.css";

class App extends Component {
  render() {
    const list = this.props.todo.map(item => {
      let style = { fontSize: "18px", width: "200px", cursor: "pointer" };
      if (item.complete) {
        style.textDecoration = "line-through";
      }
      return <li style={style}>{item.value}</li>;
    });
    const ulStyle = { width: "200px", margin: "auto" };
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ul style={ulStyle}>{list}</ul>
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
