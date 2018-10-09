import React, { Component } from "react";
import { connect } from "react-redux";
import { cal_counter } from "./reducer/reducer";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  click() {
    this.props.cal_counter;
  }
  render() {
    return (
      <div>
        <p>Hello</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.click}>INC</button>
      </div>
    );
  }
}
const mapPropsToState = state => {
  counter: this.cal_counter.counter;
};
export default connect(
  mapPropsToState,
  {}
)(MainContainer);
