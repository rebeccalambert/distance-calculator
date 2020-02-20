import React, { useState } from 'react';

function AutoComplete({ citiesArray, updateLat, updateLong }) {

    const [possibleMatches, setMatches] = useState([]);

    const handleSelect = (latitude, longitude) => {
        updateLat(latitude);
        updateLong(longitude);
    }

    const matches = (e) => {
        let name = e.target.value;
        const matches = [];
        if (name.length === 0) {
          return citiesArray;
        }
        
        citiesArray.forEach(city => {
          let cityAddress = `${city.street_number} ${city.route}, ${city.locality}, ${city.administrativeArea}, ${city.country}, ${city.postalCode}`
          if (cityAddress.toLowerCase().includes(name.toLowerCase())) {
            matches.push([cityAddress, city.latitude, city.longitude]);
          }
        });
    
        if (matches.length === 0) {
          matches.push(['No matches', "", ""]);
        }
    
        setMatches(matches);
    }


    const results = possibleMatches.map((result, i) => {
        return (
            <li key={i} onClick={() => handleSelect(result[1], result[2])}>{result[0]}</li>
        );
    });

    return(
        <div>
        <h1>Possible cities</h1>
        <div>
            <input
            onChange={(e) => matches(e)}
            placeholder='Search by address...'/>
            <ul>
                {results}
            </ul>
        </div>
        </div>
    );
}

export default AutoComplete;
