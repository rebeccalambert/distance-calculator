import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Info from './Info.jsx';
import * as citiesArray from '../api/addresses';

function App() {
  
  const [info, setInfo] = useState({
    maxDistance: 0,
    longitude: "",
    latitude: "",
  })
  const [currCity, setCurrCity] = useState("")

  const settingInfo = (newInfo) => {
    // console.log(newInfo)
    const newMax = (newInfo.maxDistance);
    const newLong = (newInfo.longitude);
    const newLat = (newInfo.latitude);

    setInfo({
      maxDistance: newMax,
      longitude: newLong,
      latitude: newLat,
    });
  }


  // const currentCity = () => {
  //   let cities = citiesArray.default;
  //   for (let i=0; i < cities.length; i++) {
  //     let city = cities[i]
  //     // console.log(city.longitude)
  //     // console.log(info.longitude) 
  //     if (city.longitude == info.longitude && city.latitude == info.latitude){
  //       console.log(city.locality)
  //       setCurrCity(city.locality)
  //     }
  //   }
  // }

  const findCities = e => {
    let limit = info.maxDistance;
    let baseLat = Number(info.latitude);
    let baseLong = Number(info.longitude);
    
    let cities = citiesArray.default;

    let closeCities = []
    for (let i=0; i < cities.length; i++) {
      let city = cities[i] 

      let distance = 2 * Math.asin(Math.sqrt((Math.sin((baseLat - city.latitude)/2))^2 + Math.cos(baseLat) * Math.cos(city.latitude)*(Math.sin((baseLong - city.longitude)/2))^2))
      console.log(distance)
      if (distance <= limit) {
        closeCities.push(city);
      }
    }
    return closeCities
  }

  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingInfo={settingInfo} existingInfo={info}/>
      <Info maxDistance={info.maxDistance} closeCities={findCities} />
      <button onClick={(e) => findCities()}>list the cities</button>
    </div>
  );
}

export default App;