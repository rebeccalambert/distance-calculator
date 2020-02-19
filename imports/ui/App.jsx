import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';


function App() {
  const [count, setCount] = useState(["0"])
  // state = {
  //   counter: 0,
  // }

  const increment = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    const newCount = (Number(count) + 1)
    setCount(`${newCount}`);
  }

  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation increment={increment} counter={count[0]}/>
      <Info />
    </div>
  );
}

export default App;