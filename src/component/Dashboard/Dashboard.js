import "./Dashboard.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      console.log(res);
      this.setState({
        houses: res.data
      });
    });
  }

  render() {
    const { houses } = this.state;
    let allHouses = this.state.houses.map((houses, id) => {
      return (
        <div key={id}>
          <p>{houses.name}</p>
          <p>{houses.address}</p>
          <p>{houses.city}</p>
        </div>
      );
    });
    return (
      <div>
        Dashboard
        <div className="house-contain">{allHouses}</div>
        <House />
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
