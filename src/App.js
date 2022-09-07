//import logo from './logo.svg';
import './App.css';
import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/homescreen';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
      {/* <h1>Mp's Shoppe</h1> */}
    </div>
  );
}

export default App;
