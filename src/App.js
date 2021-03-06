import React, { Component } from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfoilio';


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
        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default App;
