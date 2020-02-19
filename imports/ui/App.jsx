import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';


function App() {
  const [count, setCount] = useState(["0"])

  const increment = () => {
    const newCount = (Number(count) + 1)
    setCount(`${newCount}`);
  }

  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation increment={increment}/>
      <Info counter={count[0]}/>
    </div>
  );
}

export default App;