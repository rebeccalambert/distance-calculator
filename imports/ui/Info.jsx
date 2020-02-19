import React from 'react';


function Locations({ maxDistance, currCity, Longitude, Latitude }) {
  return (
    <section>
      <p>You are in {currCity}.</p>
      <p>You want to stay within {maxDistance} miles.</p>
    </section>
  );
}

export default Locations;

