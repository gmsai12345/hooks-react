import React, { useState, useEffect } from "react";

export default function Example() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const element = document.getElementById("warning-message");
    if (showMessage) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }, [showMessage]); // only run the effect if showMessage changes
  // useeffect mandatory to put the division in variable

  return (
    <div>
      <div id="warning-message">This is a warning message</div>
      <button onClick={() => setShowMessage(true)}>Show message</button>
      <button onClick={() => setShowMessage(false)}>Hide message</button>
    </div>
  );
}
// in the return tag it always puts it in the second part of the use state variable always for use effect
// what ever you want to change please put it in latter part of the use state variable
