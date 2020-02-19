import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';


function App() {
  // const [count, setCount] = useState(["0"])

  // const increment = () => {
  //   const newCount = (Number(count) + 1)
  //   setCount(`${newCount}`);
  // }

  const [maxDistance, setMaxDistance] = useState(["0"])

  const settingMax = (newDistance) => {
    const newMax = (newDistance);
    // const newMax = (Number(newDistance))
    console.log(newMax);
    setMaxDistance(`${newMax}`);
  }

  const findLocations = () => {

  }

  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingMax={settingMax}/>
      <Info maxDistance={maxDistance}/>
    </div>
  );
}

export default App;