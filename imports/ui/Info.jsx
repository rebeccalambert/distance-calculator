import React from 'react';


function Locations({ maxDistance, closeCities }) {
  // console.log(closeCities)
  cityList = closeCities.map( (city) =>{
    return (
    <li>
      <h1>{city.locality}</h1>
    </li>
    )  
  })

  return (
    <section>
      {/* <p>You are in {currCity}.</p> */}
      <p>You want to stay within {maxDistance} km.</p>
      <ul> Cities
        {cityList}
      </ul>
    </section>
  );
}

export default Locations;

