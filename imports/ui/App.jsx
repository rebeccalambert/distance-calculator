import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';


function App() {
  
  const [info, setInfo] = useState({})

  const settingInfo = (newInfo) => {
    console.log(newInfo)
    const newMax = (newInfo.maxDistance);
    const newLong = (newInfo.longitude);
    const newLat = (newInfo.latitude);

    setInfo({
      maxDistance: newMax,
      longitude: newLong,
      latitude: newLat
    });
  }


  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingInfo={settingInfo}/>
      <Info maxDistance={info.maxDistance} Longitude={info.longitude} Latitude={info.latitude}/>
    </div>
  );
}

export default App;