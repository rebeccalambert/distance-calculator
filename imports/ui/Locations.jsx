import React from 'react';


function Locations({ maxDistance, closeCities }) {
  let i = 0;
  let cityList;
  if (closeCities.length === 0) {
    cityList = 
      (
        <h3>No options available</h3>  
      )      
  } else {
    cityList = closeCities.map( (city) =>{
      i += 1;
      return (
      <li className="result" key={i}>
        <h4>{city.street_number} {city.route}, {city.locality}, {city.administrativeArea}, {city.country}, {city.postalCode}</h4>
      </li>
      )  
    })
  }

  return (
    <div className="locations">
      <h2>You want to stay within {maxDistance} km.</h2>
      <h2>The addresses in that range are:</h2>
      <ul className="results-list"> 
        {cityList}
      </ul>
    </div>
  );
}

export default Locations;

