import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';
import * as citiesArray from '../api/addresses';

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

  const currentCity = () => {
    let cities = citiesArray.default;
    for (let i=0; i < cities.length; i++) {
      console.log(cities[i])
    }
  }


  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingInfo={settingInfo}/>
      <Info maxDistance={info.maxDistance} Longitude={info.longitude} Latitude={info.latitude}/>
      <button onClick={() => currentCity()}>list the cities</button>
    </div>
  );
}

export default App;