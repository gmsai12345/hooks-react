// import React, { useState, useEffect } from "react";
// // real life example of mounting and unmounting
// export default function Example() {
//   const [showMessage, setShowMessage] = useState(false);

//   useEffect(() => {
//     const element = document.getElementById("message");
//     element.style.backgroundColor = "green";
//     element.style.color = "white";

//     // Clean up the effect when the component unmounts
//     // using return will tell function what to do on unmount
//     return () => {
//       element.style.backgroundColor = "initial";
//       element.style.color = "initial";
//     };
//   }, [showMessage]); // only run the effect on mount
//   // when unmount it will change back to orginal
//   return (
//     <div>
//       {showMessage && <div id="message">This is a message</div>}
//       {/* instead of that you can use
//       if (showMessage) {
//   return (
//     <div id="message">This is a message</div>
//   );
// } */}

//       <button onClick={() => setShowMessage(!showMessage)}>
//         Toggle message
//       </button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Example() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const element = document.getElementById("message");
    if (element) {
      element.style.backgroundColor = "green";
      element.style.color = "white";
    }

    // Clean up the effect when the component unmounts
    return () => {
      if (element) {
        element.style.backgroundColor = "initial";
        element.style.color = "initial";
      }
    };
  }, [showMessage]); // only run the effect on mount
  // return is used to see when the component is unmounted
  // return to orginal colour
  return (
    <div>
      {showMessage && <div id="message">This is a message</div>}

      {/* instead of that you can use 
//       if (showMessage) {
//   return (
//     <div id="message">This is a message</div>
//   );
// } */}
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle message
      </button>
    </div>
  );
}
