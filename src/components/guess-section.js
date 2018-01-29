import React from "react";

import GuessForm from "./guess-form";

export default function GuessSection(props) {
  return (
    <section>
      <h2>{props.message}</h2>
      <GuessForm onGuess={props.onGuess} />
    </section>
  );
}
