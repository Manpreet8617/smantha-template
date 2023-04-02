import serviceIcon1 from "../assets/img/service-icon-1.svg"
import serviceIcon2 from "../assets/img/service-icon-2.svg"
import serviceIcon3 from "../assets/img/service-icon-3.svg"
import serviceIcon4 from "../assets/img/service-icon-4.svg"
import serviceIcon5 from "../assets/img/service-icon-5.svg"
import SmilingPretty from "../assets/img/smiling-pretty.png"

function MyProgram() {
    return (
        <section className="my-program" style={{ "background-image": "url(./assets/img/blur-1.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200"
                        data-aos-duration="400">
                        <div className="heading">
                            <h3>My program</h3>
                            <p>Nulla aliquet enim tortor at auctor urna.
                                Neque sodales ut etiam sit amet nisl purus.
                                Auctor neque vitae tempus quam.
                                At urna condimentum mattis pellentesque.</p>
                            <a href="apointment-1.html" className="button">Join Now</a>
                        </div>
                        <div className="program laft">
                            <div className="program-img">
                                <img alt="service" src={serviceIcon1} />
                                <h4><a href="#">cardio</a></h4>
                            </div>
                            <p>Pretium quam vulputate dignissim
                                suspen disse. Nisi scelerisque
                                eu ultrices.</p>
                        </div>
                        <div className="program laft not">
                            <div className="program-img">
                                <img alt="service" src={serviceIcon2} />
                                <h4><a href="#">Abdominal abs</a></h4>
                            </div>
                            <p>Pretium quam vulputate dignissim
                                suspen disse. Nisi scelerisque
                                eu ultrices.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="smiling">
                            <img alt="service" src={SmilingPretty} />
                            <ul>
                                <li className="map-pin">
                                    <span className="dot"></span>
                                    <a href="javascript:void(0)" className="close-icon">
                                        <i className="fa-solid fa-x"></i>
                                    </a>
                                    <div className="program mobil">
                                        <div className="program-img">
                                            <img alt="service" src={serviceIcon1} />
                                            <h4><a href="#">cardio</a></h4>
                                        </div>
                                        <p>Pretium quam vulputate dignissim
                                            suspen disse. Nisi scelerisque
                                            eu ultrices.</p>
                                    </div>
                                </li>
                                <li className="map-pin">
                                    <span className="dot"></span>
                                    <div className="program mobil">
                                        <div className="program-img">
                                            <div className="servic-mobil">
                                                <img alt="service" src={serviceIcon2} />
                                                <h4><a href="#">Abdominal abs</a></h4>
                                            </div>

                                        </div>
                                        <p>Pretium quam vulputate dignissim
                                            suspen disse. Nisi scelerisque
                                            eu ultrices.</p>
                                    </div>
                                    <a href="javascript:void(0)" className="close-icon">
                                        <i className="fa-solid fa-x"></i>
                                    </a>
                                </li>
                                <li className="map-pin">
                                    <span className="dot"></span>
                                    <a href="javascript:void(0)" className="close-icon">
                                        <i className="fa-solid fa-x"></i>
                                    </a>
                                    <div className="program mobil">
                                        <div className="program-img">
                                            <img alt="service" src={serviceIcon3} />
                                            <h4><a href="#">Shoulders</a></h4>
                                        </div>
                                        <p>Pretium quam vulputate dignissim
                                            suspen disse. Nisi scelerisque
                                            eu ultrices.</p>
                                    </div>
                                </li>
                                <li className="map-pin">
                                    <span className="dot"></span>
                                    <a href="javascript:void(0)" className="close-icon">
                                        <i className="fa-solid fa-x"></i>
                                    </a>
                                    <div className="program mobil">
                                        <div className="program-img">

                                            <img alt="service" src={serviceIcon4} />
                                            <h4><a href="#">hands</a></h4>

                                        </div>
                                        <p>Pretium quam vulputate dignissim
                                            suspen disse. Nisi scelerisque
                                            eu ultrices.</p>
                                    </div>
                                </li>
                                <li className="map-pin">
                                    <span className="dot"></span>
                                    <a href="javascript:void(0)" className="close-icon">
                                        <i className="fa-solid fa-x"></i>
                                    </a>
                                    <div className="program mobil">
                                        <div className="program-img">

                                            <img alt="service" src={serviceIcon5} />
                                            <h4><a href="#">time</a></h4>
                                        </div>
                                        <p>Pretium quam vulputate dignissim
                                            suspen disse. Nisi scelerisque
                                            eu ultrices.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                        <div className="program right">
                            <div className="program-img">
                                <img alt="service" src={serviceIcon3} />
                                <h4><a href="#">Shoulders</a></h4>
                            </div>
                            <p>Pretium quam vulputate dignissim
                                suspen disse. Nisi scelerisque
                                eu ultrices.</p>
                        </div>
                        <div className="program right">
                            <div className="program-img">
                                <img alt="service" src={serviceIcon4} />
                                <h4><a href="#">Hands</a></h4>
                            </div>
                            <p>Pretium quam vulputate dignissim
                                suspen disse. Nisi scelerisque
                                eu ultrices.</p>
                        </div>
                        <div className="program right not">
                            <div className="program-img">
                                <img alt="service" src={serviceIcon5} />
                                <h4><a href="#">Time</a></h4>
                            </div>
                            <p>Pretium quam vulputate dignissim
                                suspen disse. Nisi scelerisque
                                eu ultrices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProgram;