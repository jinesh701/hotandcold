import React from "react";

import Nav from "./nav";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav onNewGame={this.props.onNewGame} />
        <h1>Hot or Cold</h1>
      </header>
    );
  }
}
