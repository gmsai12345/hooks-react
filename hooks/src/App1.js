import React, { useState } from "react";
export default function App1() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // in same array we can give 2 params
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </div>
  );
}
