import Photo1 from "../assets/img/Photo-1.png"
import Point1 from "../assets/img/Points1.png"
import VideoPlayer from "../assets/img/Video-Player.jpg"


function FeaturedOne() {
    return (
        <section className="featured-one" style={{ "background-image": "url(./assets/img/blur.png)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="build">
                            <h2>Build a Perferct Health Growth</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <a href="apointment-1.html" className="button">JOIN NOW</a>
                        </div>
                        <div className="img-girl">
                            <img alt="img-girl" src={Photo1} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="points1">
                            <img alt="points" src={Point1} />
                            <h6>Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non provident.</h6>
                        </div>
                        <div className="duis">
                            <a data-fancybox="" href="https://www.youtube.com/watch?v=Vr3h5X9kmUo">
                                <img alt="video" src={VideoPlayer} />
                                <i className="fa-solid fa-play"></i>
                            </a>
                            <h4>Stay Healthy by active</h4>
                            <p>Habitant morbi tristique senectus
                                et netus. Morbi enim nunc faucibus a pellentesque sit. Sit
                                amet dictum sit amet justo donec.</p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <ul className="funfact">
                            <li>
                                <h2 className="timer count-title count-number" data-to="3" data-speed="1500">3</h2>
                                <p>Certificate
                                    trainer</p>
                            </li>
                            <li>
                                <h2 className="timer count-title count-number" data-to="8" data-speed="1500">8</h2>
                                <p>Years
                                    Experience</p>
                            </li>
                            <li>
                                <h2 className="timer count-title count-number" data-to="47" data-speed="1500">47</h2>
                                <p>Loyal
                                    Client</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedOne;