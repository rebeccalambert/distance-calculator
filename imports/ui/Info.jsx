import React from 'react';


function Locations({ maxDistance, Longitude, Latitude }) {
  return (
    <section>
      <p>You want to stay within {maxDistance} miles.</p>
    </section>
  );
}

export default Locations;

