import React, { Component } from 'react';
import '../css/style.css';
import Logo from '../assets/logob.png'

class Navbar extends Component {
    render(){
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <strong>
                    <a class="navbar-brand" href="#home" >
                        <img src={Logo} alt="logo" id="dipLogo"/>
                    </a>
                    </strong>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar