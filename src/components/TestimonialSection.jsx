import Slider1 from "../assets/img/slider-1.jpg"
import Slider2 from "../assets/img/slider-2.jpg"
import Slider3 from "../assets/img/slider-3.jpg"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderNa1 from "../assets/img/slider-na-1.jpg"
import SliderNa2 from "../assets/img/slider-na-2.png"
function TestimonialSection() {

    let options = {
        center: true,
        nav: true,
        margin: 30,
        dot: true,
        loop: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            300: {
                items: 1,
                nav: false,
                margin: 0,
                center: false,
            },
            800: {
                items: 2,
            }
        }

    }

    return (
        <section className="testimonials-section gap ">
            <div className="container-fluid">
                <div className="heading" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                    <h3>Real people. Real Results</h3>
                    <p>Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus.
                        Massa tempor nec feugiat nisl pretium.</p>
                </div>
                <OwlCarousel loop className="row loop-slider owl-carousel owl-theme" center={true} nav={true} margin={30} dot={true} mouseDrag={false} responsiveClass={true} data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="500">
                    <div className="col-lg-12 item">
                        <div className="slider">
                            <div className="slider-img beforeAfter hover-style">
                                <img alt="slider" src={Slider2} />
                                <img alt="slider" src={Slider1} />
                            </div>
                            <div className="blockquote">
                                <p>
                                    Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus
                                    pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec
                                    tincidunt praesent semper.</p>
                                <div className="slider-na">
                                    <img alt="slider" src={SliderNa1} />
                                    <div className="first-name">
                                        <h5>First Name Last Name</h5>
                                        <p>Weeks Workouts</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" col-lg-12 item">
                        <div className="slider">
                            <div className="slider-img beforeAfter">
                                <img alt="slider" src={Slider2} />

                                <img alt="slider" src={Slider3} />
                            </div>
                            <div className="blockquote">
                                <p>
                                    Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus
                                    pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec
                                    tincidunt praesent semper.</p>
                                <div className="slider-na">
                                    <img alt="slider" src={Slider3} />
                                    <div className="first-name">
                                        <h5>First Name Last Name</h5>
                                        <p>Weeks Workouts</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" col-lg-12 item">
                        <div className="slider">
                            <div className="slider-img beforeAfter">
                                <img alt="slider" src={Slider2} />

                                <img alt="slider" src={Slider1} />
                            </div>
                            <div className="blockquote">
                                <p>
                                    Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus
                                    pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec
                                    tincidunt praesent semper.</p>
                                <div className="slider-na">
                                    <img alt="slider" src={SliderNa2} />
                                    <div className="first-name">
                                        <h5>First Name Last Name</h5>
                                        <p>Weeks Workouts</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>);
}

export default TestimonialSection;