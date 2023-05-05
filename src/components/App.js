// import React, { Component } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             diwaliList: [
//                 { id: 1, name: "Kim" },
//                 { id: 2, name: "Tim" },
//                 { id: 3, name: "Sam" },
//                 { id: 4, name: "Hema" },
//                 { id: 5, name: "Tim" },
              
//             ]
//         };
//     }

//     render() {
//         const relativeList = this.state.diwaliList.map((data) => {
//             return <li key={`relativeListItem${data.id}`}>{data.name}</li>;
//         });

//         return (
//             <div id="main">
//                 <ol key="diwaliList">{relativeList}</ol>
//             </div>
//         );
//     }
// }

// export default App;

// ==============================================//

import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  render() {
    const relatives = ["Amit", "Rita", "Rahul", "Kavya"];

    return (
      <div>
        <h2>Relatives to Visit</h2>
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
