import React, { useState } from 'react';
import InputLocation from './InputLocation.jsx';
import Locations from './Locations.jsx';
import * as citiesArray from '../api/addresses';

function App() {
  
  const [info, setInfo] = useState({
    maxDistance: 0,
    longitude: "",
    latitude: "",
  })

  const [closeCities, setCloseCities] = useState([])

  const settingInfo = (newInfo) => {
    const newMax = (newInfo.maxDistance);
    const newLong = (newInfo.longitude);
    const newLat = (newInfo.latitude);

    setInfo({
      maxDistance: newMax,
      longitude: newLong,
      latitude: newLat,
    });
  }

  const getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg => rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  const findCities = e => {
    let limit = info.maxDistance;
    let cities = citiesArray.default;

    let closeCities = []
    for (let i=0; i < cities.length; i++) {
      let city = cities[i]; 
      
      let distance = getDistanceFromLatLonInKm(info.latitude, info.longitude, city.latitude, city.longitude);
      if (distance <= limit && distance > 0) {
        closeCities.push(city);
      }
    }
    setCloseCities(closeCities)
  }



  return (
    <div>
      <h1>Welcome to a distance calculator!</h1>
      <InputLocation settingInfo={settingInfo} existingInfo={info} citiesArray={citiesArray.default}/>
      <button onClick={(e) => findCities()}>Find the cities</button>
      <Locations maxDistance={info.maxDistance} closeCities={closeCities} />
    </div>
  );
}

export default App;