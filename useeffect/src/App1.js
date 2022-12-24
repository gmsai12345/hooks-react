import React, { useState } from "react";
// import "./App.css";
export default function App() {
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
// import React from "react";
// class ScrollingList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listRef = React.createRef();
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // Are we adding new items to the list?
//     // Capture the scroll position so we can adjust scroll later.
//     if (prevProps.list.length < this.props.list.length) {
//       const list = this.listRef.current;
//       return list.scrollHeight - list.scrollTop;
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//       const list = this.listRef.current;
//       list.scrollTop = list.scrollHeight - snapshot;
//     }
//   }

//   render() {
//     return <div ref={this.listRef}>{/* ...contents... */}</div>;
//   }
