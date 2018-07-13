import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "./Wizard.css";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }
  changeName(val) {
    this.setState({
      name: val
    });
  }
  changeAddress(val) {
    this.setState({
      address: val
    });
  }
  changeCity(val) {
    this.setState({
      city: val
    });
  }
  changeState(val) {
    this.setState({
      state: val
    });
  }
  changeZip(val) {
    this.setState({
      zipcode: val
    });
  }

  render() {
    return (
      <div className="wizard-body">
        <p>Wizard</p>
        <input
          placeholder="Name"
          onChange={e => this.changeName(e.target.value)}
        />

        <input
          placeholder="Address"
          onChange={e => this.changeAddress(e.target.value)}
        />

        <input
          placeholder="City"
          onChange={e => this.changeCity(e.target.value)}
        />

        <input
          placeholder="State"
          onChange={e => this.changeState(e.target.value)}
        />

        <input
          placeholder="Zip Code"
          onChange={e => this.changeZip(e.target.value)}
        />

        <Link to="/">
          <button onClick={() => console.log(this.state)}>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
