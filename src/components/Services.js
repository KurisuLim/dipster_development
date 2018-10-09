import React, { Component } from 'react';
import '../css/style.css';

class Services extends Component{
    render(){
        return(
            <div id="services" class="container-fluid text-center">
            <h2>SERVICES</h2>
            <h4>What we offer</h4>
            <br/>
            <div class="row">
                <div class="col-sm-4">
                <i class="fa fa-power-off logo-small"></i>
                <h4>POWER</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <i class="fa fa-users logo-small"></i>
                <h4>Community</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <i class="fa fa-suitcase logo-small"></i>
                <h4>JOB DONE</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col-sm-4">
                <i class="fa fa-mobile logo-small"></i>
                <h4>Mobile</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <i class="fa fa-certificate logo-small"></i>
                <h4>CERTIFIED</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-wrench logo-small"></span>
                <h4>HARD WORK</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div>
            </div>
        )
    }
}
export default Services