import React from "react";

import "./nav.css";

export default class Nav extends React.Component {
  onNewGame(e) {
    e.preventDefault();
    if (this.props.onNewGame) {
      this.props.onNewGame();
    }
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a href="#" onClick={e => this.onNewGame(e)}>
              +New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
