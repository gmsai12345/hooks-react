//import React from "react";
// instead of using lifecycle component didmount and did update
// method we can use use effect side effect
// we are wwriting exact same code twice and it is split apard
// // ** conventional way of using usestate
// import React from 'react';
// class App extends React.Component {
//   constructor(props) {
//     super(props); // no neet to know what is this

//     // this is the main use of usin gconstructor may be we can Initializing the state
//     this.state = { color: 'lightgreen' };
//   } // initializzing the state in class constructors
//   componentDidMount() {

//     // Changing the state after 2 sec
//     // from the time when the component
//     // is rendered
//     setTimeout(() => {
//       this.setState({ color: 'wheat' });
//     }, 2000);
//   }
//   render() { // render really important when you wabt to use state change
//     return (
//       <div>
//         <p
//           style={{
//             color: this.state.color,
//             backgroundColor: 'rgba(0,0,0,0.88)',
//             textAlign: 'center',
//             paddingTop: 20,
//             width: 400,
//             height: 80,
//             margin: 'auto'
//           }}
//         >
//           GeeksForGeeks
//         </p>

//       </div>
//     );
//   }
// }
// export default App;

// ** new method using useeffect hoook
import React, { useState } from "react";
export default function hook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}
