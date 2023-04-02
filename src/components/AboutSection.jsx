import Photo from "../assets/img/Photo.jpg"
import Photo3 from "../assets/img/Photo-3.jpg"
import Photo4 from "../assets/img/Photo-4.jpg"

function AboutSection() {

      
    return (
        <section className="about-section gap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos={"fade-right"} data-aos-delay="200"
                        data-aos-duration="400">
                        <div className="photo-section hover-style">
                            <img alt="photo-section" className="Photo" src={Photo} />
                            <img alt="photo-section" className="Photo-3" src={Photo3} />
                            <img alt="photo-section" className="Photo-4" src={Photo4} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-left" data-aos-delay="300"
                        data-aos-duration="500">
                        <div className="about-info heading">
                            <h3>Hi! My name is
                                Hana Evans</h3>
                            <p>Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra.
                                Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit
                                euismod.</p>
                            <a href="about.html" className="button">learn more</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;