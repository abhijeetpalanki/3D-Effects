import React from 'react';
import './ImageSlider.css';
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
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active slide-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Image Slider</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quas adipisci voluptates, culpa nobis animi beatae aliquid provident, inventore ullam consequuntur quo sequi aspernatur eius magni, voluptas delectus iste fugiat.</p>
                                    <button type='button'>Read More</button>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={pic1} alt="pic-1" className='pic-one' />
                                        <img src={pic2} alt="pic-2" className='pic-two' />
                                        <img src={pic3} alt="pic-3" className='pic-three' />
                                        <img src={pic4} alt="pic-4" className='pic-four' />
                                        <img src={pic5} alt="pic-5" className='pic-five' />
                                        <img src={pic6} alt="pic-6" className='pic-six' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Learn CSS Animations</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minus dicta quas provident accusamus labore natus commodi ipsum similique asperiores obcaecati fugit in eum unde? Vel, a. Ipsum, eius reiciendis a doloribus nesciunt numquam praesentium, magnam perspiciatis placeat corporis quos, quam dicta hic enim veniam totam maiores saepe voluptate delectus temporibus aliquid suscipit labore. Molestias sint qui voluptate natus dolore, unde, quibusdam optio minus impedit quam laboriosam distinctio! Illum deleniti, impedit soluta placeat modi incidunt sequi quae nulla quam harum! Tempora a obcaecati asperiores nihil porro natus unde incidunt voluptas, magni hic fugit nam.</p>
                                    <button type='button'>Read More</button>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={img1} alt="img-1" className='img-one' />
                                        <img src={img2} alt="img-2" className='img-two' />
                                        <img src={img3} alt="img-3" className='img-three' />
                                        <img src={img4} alt="img-4" className='img-four' />
                                        <img src={img5} alt="img-5" className='img-five' />
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
