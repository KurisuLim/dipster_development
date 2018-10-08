import React, { Component } from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div 
      className="App"
      id="home" 
      data-spy="scroll"
      data-target=".navbar"
      data-offset="60"
      >
        <Navbar />
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
