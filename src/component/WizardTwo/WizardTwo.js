import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUrl } from "../../ducks/reducer";

class WizardTwo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     url: ""
  //   };

  //   this.addUrl = this.addUrl.bind(this);
  // }
  // addUrl(val) {
  //   this.setState({
  //     url: val
  //   });
  // }

  //////////////Dispatch
  // onUrlInput() {
  //   this.props.dispatch(updateUrl(this.state.newItem));
  // }

  onUrlInput() {
    this.props.dispatch({
      type: "UPDATE_URL",
      payload: this.state.url
    });
  }

  render() {
    const { updateUrl } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>Wizard</p>
        <input
          placeholder="Image URL"
          onChange={e => updateUrl(e.target.value)}
        />

        <Link to="/">
          <button onClick={() => console.log(this.state)}>Cancel</button>
        </Link>
        <Link to="/WizardThree">
          <button> Next </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { url } = state;
  return {
    url
  };
}

export default connect(
  mapStateToProps,
  { updateUrl }
)(WizardTwo);

//map dispatch to props
