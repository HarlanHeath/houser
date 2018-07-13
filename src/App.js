import React, { Component } from "react";
import Header from "./component/Header/Header";
import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Link to="/">Dashboard</Link>
        <Link to="/wizard">Wizard</Link> */}
        {routes}
      </div>
    );
  }
}

export default App;
