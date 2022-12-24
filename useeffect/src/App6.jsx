// changing style of multiple element
import React, { useState, useEffect } from "react";

export default function Example() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const elements = document.querySelectorAll(".colored-text");
    elements.forEach((element) => {
      element.style.color = color;
    });
  }, [color]); // only run the effect if color changes
  // same element as app5 it fetches full classname in div and for this it uses .forEach for all the element coming under
  // that element div
  return (
    <div>
      <div className="colored-text">This text will change color</div>
      <div className="colored-text">So will this text</div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
