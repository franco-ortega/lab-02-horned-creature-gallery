import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
//import ImageItem from './ImageItem.js';
import ImageList from './ImageList.js'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList />
      </div>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;