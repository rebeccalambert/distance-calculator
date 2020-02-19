import React, { Component } from 'react';

// export default class InputLocation extends Component {
//   state = {
//     counter: 0,
//   }

//   increment() {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.increment()}>Click Me</button>
//         <p>You've pressed the button {this.state.counter} times.</p>
//       </div>
//     );
//   }
// }

function InputLocation({ increment }) {

  const incrementing = e => {
    increment();
  }

  return (
    <div>
      <button onClick={e => incrementing()}>Click Me</button>
    </div>
  );

}

export default InputLocation;