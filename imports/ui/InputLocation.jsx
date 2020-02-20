import React from 'react';
import AutoComplete from "./Auto";

function InputLocation({ settingInfo, existingInfo, citiesArray }) {

  let info = {
    longitude: existingInfo.longitude,
    latitude: existingInfo.latitude,
    maxDistance: existingInfo.maxDistance,
  }

  const updateInfo = e => {
    settingInfo(info);
  }

  const updatingMax = e => {
    info.maxDistance = e.target.value;
    updateInfo();
  }

  const updatingLong = e => {
    info.longitude = e.target.value;
    updateInfo();
  }
  const updatingLat = e => {
    info.latitude = e.target.value;
    updateInfo();
  }

  const updateLatFromAddress = lat => {
    info.latitude = lat;
  }

  const updateLongFromAddress = long => {
    info.longitude = long;
    updateInfo();
  }




  return (
    <div className="form">

        <div className="coords-input">
          <label>Where are you at?</label>
          <br></br>
          <input
            rows="1"
            value={info.latitude}
            placeholder="Latitude"
            type="number"
            onChange={e => updatingLat(e)}
          />
          <input
            rows="1"
            value={info.longitude}
            placeholder="Longitude"
            type="number"
            onChange={e => updatingLong(e)}
          />
        </div>

        <div className="address-input">
          <AutoComplete citiesArray={citiesArray} updateLat={updateLatFromAddress} updateLong={updateLongFromAddress}/>
        </div>
      
      <br></br>
      
      {/* <div className="distance-input"> */}
        <label>What's the max you want to travel (in kilometers)?</label>
        <br></br>
        <input
          type="number"
          min="0"
          onChange={e => updatingMax(e)}
          placeholder="0"
        />
      {/* </div> */}

    </div>
  );

}

export default InputLocation;