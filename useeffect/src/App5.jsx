import React, { useState, useEffect } from "react";
export default function Example() {
  const [color, setColor] = useState("red");
  // for every use effect to change some thing define use state
  // of default value
  // then put into useeffect and then get that particular classname and put it in variable and then change variable
  // then button onclicked after component rendered use effect calls colour

  useEffect(() => {
    const element = document.getElementById("my-element");
    element.style.color = color;
  }, [color]); // only run the effect if color changes
  // why is colour outside curly baces is that this function will be called whenever colour changes

  return (
    <div>
      <div id="my-element">This text will change color</div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
// putting use state final colour value as red,green,blue is that we are putting it manually so that the use state
// function called will call the final value
