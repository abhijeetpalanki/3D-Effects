import React from 'react';
import './ImageSlider.css';
import { Animated } from "react-animated-css";

import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";
import pic5 from "./pic-5.png";
import pic6 from "./pic-6.png";
import img1 from "./img-1.png";
import img2 from "./img-2.png";
import img3 from "./img-3.png";
import img4 from "./img-4.png";
import img5 from "./img-5.png";

const ImageSlider = () => {
    return (
        <div className="image-slider__wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="7000">
                <div className="carousel-inner">
                    <div className="carousel-item active slide-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Animated animationIn='fadeInLeft' animationInDelay={1000}>
                                        <h1>Image Slider</h1>
                                    </Animated>
                                    <Animated animationIn='lightSpeedIn' animationInDelay={2000}>
                                        <p>
                                            An image slider is a term that refers to a slideshow on a website. An example of a slider can be a revolving carousel that displays products or photos. Web designers can incorporate sliders into all kinds of sites, but they are most useful for businesses wanting to show relevant content or showcase professional portfolios.
                                        </p>
                                    </Animated>
                                    <Animated animationIn='bounceIn' animationInDelay={5000}>
                                        <button type='button'>Read More</button>
                                    </Animated>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <Animated animationIn='zoomIn' animationInDelay={1000}><img src={pic1} alt="pic-1" className='pic-one' /></Animated>
                                        <Animated animationIn='fadeInLeft' animationInDelay={4000}><img src={pic2} alt="pic-2" className='pic-two' /></Animated>
                                        <Animated animationIn='fadeInUp' animationInDelay={3000}><img src={pic3} alt="pic-3" className='pic-three' /></Animated>
                                        <Animated animationIn='fadeInDownBig' animationInDelay={3000}><img src={pic4} alt="pic-4" className='pic-four' /></Animated>
                                        <Animated animationIn='fadeInUpBig' animationInDelay={4000}><img src={pic5} alt="pic-5" className='pic-five' /></Animated>
                                        <Animated animationIn='bounceIn' animationInDelay={5000}><img src={pic6} alt="pic-6" className='pic-six' /></Animated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Animated animationIn='fadeInLeft' animationInDelay={1000}>
                                        <h1>Learn CSS Animations</h1>
                                    </Animated>
                                    <Animated animationIn='lightSpeedIn' animationInDelay={2000}> 
                                        <p>
                                            An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times as you want.
                                            To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.
                                        </p>
                                    </Animated>
                                    <Animated animationIn='bounceIn' animationInDelay={5000}>
                                        <button type='button'>Read More</button>
                                    </Animated>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <Animated animationIn='zoomIn' animationInDelay={1000}><img src={img1} alt="img-1" className='img-one' /></Animated>
                                        <Animated animationIn='fadeInLeft' animationInDelay={4000}><img src={img2} alt="img-2" className='img-two' /></Animated>
                                        <Animated animationIn='zoomIn' animationInDelay={3000}><img src={img3} alt="img-3" className='img-three' /></Animated>
                                        <Animated animationIn='fadeInDownBig' animationInDelay={3000}><img src={img4} alt="img-4" className='img-four' /></Animated>
                                        <Animated animationIn='fadeInRight' animationInDelay={4000}><img src={img5} alt="img-5" className='img-five' /></Animated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default ImageSlider
