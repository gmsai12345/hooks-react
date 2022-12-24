import React, { useState, useEffect } from "react";

export default function Example() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    console.log("The component has mounted");
    return () => console.log("The component has unmounted");
  }, []); // only run the effect on mount

  useEffect(() => {
    const element = document.getElementById("warning-message");
    if (showMessage) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }, [showMessage]); // only run the effect if showMessage changes

  return (
    <div>
      <div id="warning-message">This is a warning message</div>
      <button onClick={() => setShowMessage(true)}>Show message</button>
      <button onClick={() => setShowMessage(false)}>Hide message</button>
    </div>
  );
}
