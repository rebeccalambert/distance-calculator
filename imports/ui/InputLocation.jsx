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

function InputLocation({ settingMax }) {

  const updatingMax = e => {
    // console.log(e.target.value)
    settingMax(e.target.value);
  }

  return (
    <div>
      <label className="form-label">What's the max you want to travel?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="0"
        onChange={e => updatingMax(e)}
        placeholder="0"
      />
      {/* <button onClick={e => incrementing()}>Click Me</button> */}
    </div>
  );

}

export default InputLocation;