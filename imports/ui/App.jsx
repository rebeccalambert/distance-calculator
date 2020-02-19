import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';
import * as citiesArray from '../api/addresses';

function App() {
  
  const [info, setInfo] = useState({})
  const [currCity, setCurrCity] = useState("")

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
      let city = cities[i]
      // console.log(city.longitude)
      // console.log(info.longitude) 
      if (city.longitude == info.longitude && city.latitude == info.latitude){
        console.log(city.locality)
        setCurrCity(city.locality)
      }
    }
  }


  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingInfo={settingInfo}/>
      <Info maxDistance={info.maxDistance} currCity={currCity} Longitude={info.longitude} Latitude={info.latitude}/>
      <button onClick={() => currentCity()}>list the cities</button>
    </div>
  );
}

export default App;