import Background from "../assets/img/background.jpg"
import GrogeousYoung from "../assets/img/gorgeous-young.png"

function ReadyTo() {
    return (
        <section class="ready-to">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-delay="200"
                        data-aos-duration="400">
                        <div class="gorgeous">
                            <img alt="background-image" class="gorg" src={Background} />
                            <img alt="img-girl" src={GrogeousYoung} />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-left" data-aos-delay="300"
                        data-aos-duration="500">
                        <div class="heading">
                            <h3>ready to <br/>get started</h3>
                            <p>Duis at consectetur lorem
                                donec massa sapien faucibus
                                et molestie. Ut etiam sit amet nisl purus.</p>
                            <h6>Never be bored by your fitness program again!</h6>

                            <p>Membership is only $29.99/mo, that’s less than $1 a day!</p>

                            <a href="apointment-1.html" class="button">Join Now</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReadyTo;