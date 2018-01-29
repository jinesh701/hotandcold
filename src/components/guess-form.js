import React from "react";

export default class GuessForm extends React.Component {
  onGuess(event) {
    event.preventDefault();

    if (this.props.onGuess) {
      const value = this.input.value;
      this.props.onGuess(value);
    }
    this.input.value = "";
  }

  render() {
    return (
      <form onSubmit={e => this.onGuess(e)}>
        <input
          type="text"
          maxLength="3"
          placeholder="Enter Your Guess: 1-99"
          required
          ref={input => (this.input = input)}
        />
        <input type="submit" value="Guess" />
      </form>
    );
  }
}
