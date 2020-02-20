import React, { useState } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
            // value={this.state.inputVal}
            placeholder='Search by address...'/>
            <ul>
                {results}
            </ul>
        </div>
        </div>
    );
}

export default AutoComplete;

// export default class AutoComplete extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       inputVal: ''
// //     };
// //     this.selectName = this.selectName.bind(this);
// //     this.handleInput = this.handleInput.bind(this);
// //   }

// //   handleInput(event) {
// //     this.setState({inputVal: event.currentTarget.value});
// //   }

//   matches() {
//     const matches = [];
//     if (this.state.inputVal.length === 0) {
//       return this.props.names;
//     }

//     this.props.names.forEach(name => {
//       const sub = name.slice(0, this.state.inputVal.length);
//       if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
//         matches.push(name);
//       }
//     });

//     if (matches.length === 0) {
//       matches.push('No matches');
//     }

//     return matches;
//   }

// //   selectName(event) {
// //     const name = event.currentTarget.innerText;
// //     this.setState({inputVal: name});
// //   }

//   render() {
//     const results = this.matches().map((result, i) => {
//       return (
//         <li key={i} onClick={this.selectName}>{result}</li>
//       );
//     });
//     return(
//       <div>
//         <h1>Autocomplete</h1>
//         <div className='auto'>
//           <input
//             onChange={this.handleInput}
//             value={this.state.inputVal}
//             placeholder='Search...'/>
//           <ul>
//             <ReactCSSTransitionGroup
//               transitionName='auto'
//               transitionEnterTimeout={500}
//               transitionLeaveTimeout={500}>
//               {results}
//             </ReactCSSTransitionGroup>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// };
