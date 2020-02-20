import React from 'react';

function InputLocation({ settingInfo, existingInfo }) {

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


  return (
    <div>
      <label>Where are you at?</label>
      <input
        rows="1"
        placeholder="Latitude"
        type="number"
        onChange={e => updatingLat(e)}
      />
      <input
        rows="1"
        placeholder="Longitude"
        type="number"
        onChange={e => updatingLong(e)}
      />

      {/* //  <select name="location-type" onChange={location}>
      //   <option value="address" defaultValue>Address (Default)</option>
      //   <option value="other">Longitude, Latitude</option>
      // </select> */}
    
      <br></br>

      <label>What's the max you want to travel (in kilometers)?</label>
      <input
        type="number"
        min="0"
        onChange={e => updatingMax(e)}
        placeholder="0"
      />

    </div>
  );

}

export default InputLocation;