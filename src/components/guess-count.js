import React from "react";

export default function GuessCount(props) {
  return (
    <p>
      Guess #<span>{props.count}</span>!
    </p>
  );
}
