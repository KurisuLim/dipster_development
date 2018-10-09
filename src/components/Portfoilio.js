import React, { Component } from 'react';
import '../css/style.css';

class Portfolio extends Component{
    render(){
        return(
            <div id="portfolio" class="container-fluid text-center bg-grey">
                <h2>Portfolio</h2><br/>
                <h4>What we have created</h4>
                <div class="row text-center">
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="image.png" alt="image1" width="400" height="300"/>
                            <p><strong>Image1</strong></p>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="image.png" alt="image2" width="400" height="300"/>
                            <p><strong>Image2</strong></p>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            <img src="image.png" alt="image3" width="400" height="300"/>
                            <p><strong>Image3</strong></p>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>
                <br/>
                <h2>What our customers say</h2>
                <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <h4>"This company is the best. Dipster Rule!"<br/><span>Jane Doe, Vice President, Comment Box</span></h4>
                </div>
                <div class="item">
                    <h4>"One word... Awesome!!"<br/><span>Juan Dela Cruz, Salesman, Rep Inc</span></h4>
                </div>
                <div class="item">
                    <h4>"Could I... BE any more happy with this company?Cheap and Affordable!"<br/><span>Kenshin Himura, Rounin, Samurai X</span></h4>
                </div>
                </div>

                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
        )
    }
}
export default Portfolio