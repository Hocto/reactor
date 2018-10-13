import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./action/action";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.increase}>INC</button>
        <button onClick={this.props.decrease}>DEC</button>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    counter: state.counter
  };
};
export default connect(
  mapPropsToState,
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  })
)(MainContainer);
