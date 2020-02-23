import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };
  static PropTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };
  render() {
    return (
      <button href="" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
class App extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));

    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
