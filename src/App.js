import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start
    };
  }

  //Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }));
  }

  render() {
    return <div> {this.state.time} Detik </div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Cobain</h1>
          <Timer start="0" />
        </header>
      </div>
    );
  }
}

export default App;
