import React, { useState } from "react";

function AppleComponent() {
  const [numberOfApples, setNumberOfApples] = useState(0);

  function AppleDisplay(numberOfApples) {
    if (numberOfApples == 0 || numberOfApples == 1) {
      return `John has ${numberOfApples} apples.`;
    } else if (numberOfApples > 1) {
      return `John has ${numberOfApples} apples.`;
    } else {
      return `John owes ${Math.abs(numberOfApples)} apples.`;
    }
  }

  function increaseApple() {
    setNumberOfApples((currentValue) => currentValue + 1);
  }
  function decreaseApple() {
    setNumberOfApples((currentValue) => currentValue - 1);
  }
  function tooManyDisplay() {
    if (numberOfApples > 10) {
      return <h1>John has too many apples</h1>;
    } else {
      return "";
    }
  }

  return (
    <>
      <div>
        <h1>{AppleDisplay(numberOfApples)}</h1>
      </div>
      <button onClick={increaseApple} className="add-btn">
        Increase
      </button>

      <button style={{display: numberOfApples<=0 ? "None" : ""}}onClick={decreaseApple} className="dec-btn">
        Decrease
      </button>
      {numberOfApples > 10 ? <h1>John has too many apples</h1> : ""}
    </>
  );
}

export default AppleComponent;
