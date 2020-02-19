import React from 'react';

function InputLocation({ settingInfo }) {


  let info = {
    longitude: "",
    latitude: "",
    maxDistance: 0,
  }

  const updateInfo = e => {
    settingInfo(info);
  }

  const updatingMax = e => {
    info.maxDistance = e.target.value;
  }

  const updatingLong = e => {
    info.longitude = e.target.value;
  }
  const updatingLat = e => {
    info.latitude = e.target.value;
  }


  return (

    <div>
      
      <label>Where are you at?</label>
      <textarea
        rows="1"
        placeholder="Latitude"
        onChange={e => updatingLat(e)}
      />
      <textarea
        rows="1"
        placeholder="Longitude"
        onChange={e => updatingLong(e)}
      />

      {/* <select name="location-type">
        <option value="address" defaultValue>Address (Default)</option>
        <option value="distance">Longitude, Latitude</option>
      </select> */}
    
      <br></br>

      <label>What's the max you want to travel?</label>
      <input
        type="number"
        min="0"
        onChange={e => updatingMax(e)}
        placeholder="0"
      />

      <button type="submit" onClick={e => updateInfo(e)}>Find places near me</button>

    </div>
  );

}

export default InputLocation;