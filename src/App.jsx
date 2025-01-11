import React, { useState } from "react";
import './App.css'

function NumberInputApp() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const value = event.target.value;

    if (isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setNumber(value);

    if (value < 0) {
      setMessage("Enter a positive value.");
    } else if (value % 2 === 0) {
      setMessage(`Next 3 even numbers: ${+value + 2}, ${+value + 4}, ${+value + 6}`);
    } else {
      setMessage(`Next 3 odd numbers: ${+value + 2}, ${+value + 4}, ${+value + 6}`);
    }
  }

  return (
    <div >
      <h1>Number Input App</h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <p>{message}</p>
    </div>
  );
}

export default NumberInputApp;