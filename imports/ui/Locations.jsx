import React from 'react';


function Locations({ maxDistance, closeCities }) {
  let i = 0;
  if (closeCities.length === 0) {
    return (
      <h1>No cities within that distance! :(</h1>
    )
  } else {
    cityList = closeCities.map( (city) =>{
      i += 1;
      return (
      <li key={i}>
        <h1>{city.locality}</h1>
      </li>
      )  
    })
  }

  return (
    <section>
      <p>You want to stay within {maxDistance} km.</p>
      <ul> Cities
        {cityList}
      </ul>
    </section>
  );
}

export default Locations;

