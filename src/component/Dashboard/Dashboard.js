import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import House from "../House/House";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  render() {
    const { houses } = this.state;
    let allHouses = this.state.houses.map((elem, id) => {
      return <div allHouses key={id} />;
    });
    return (
      <div>
        Dashboard
        <div>{allHouses}</div>
        <House />
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
