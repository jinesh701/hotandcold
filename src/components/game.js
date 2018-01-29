import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      message: "Make your guess!",
      answer: Math.floor(Math.random() * 100) + 1
    };
  }

  newGame() {
    this.setState({
      guesses: [],
      message: "Make your guess!",
      answer: Math.floor(Math.random() * 100) + 1
    });
  }

  userGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        message: "Please enter a valid number"
      });
      return;
    }

    const difference = Math.abs(guess - this.state.answer);

    let message;
    if (difference >= 50) {
      message = "You're Ice Cold...";
    } else if (difference >= 30) {
      message = "You're Cold...";
    } else if (difference >= 10) {
      message = "You're Warm";
    } else if (difference >= 1) {
      message = "You're Hot!";
    } else {
      message = "You Won. Click new game to play again";
    }

    this.setState({
      message,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection
          message={this.state.message}
          onGuess={guess => this.userGuess(guess)}
        />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
