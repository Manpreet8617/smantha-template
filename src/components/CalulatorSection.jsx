import PhotoSection from "../assets/img/Photo-Section.jpg"
import FullLengthPortrait from "../assets/img/full-length-portrait.png"
import WeightScaleIcon from "../assets/img/weight-scale-icon.svg" 


function CalculatorSection() {
    return (
        <section className="calculator-section gap no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0" data-aos="fade-right" data-aos-delay="200"
                        data-aos-duration="400">
                        <div className="calculator-Photo">
                            <img alt="background-image" className="background-calculator" src={PhotoSection} />
                            <img alt="img-girl" className="girl-calculator" src={FullLengthPortrait} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0" data-aos="fade-left" data-aos-delay="300"
                        data-aos-duration="500">
                        <div className="bmi">
                            <div className="heading">
                                <h3>Calculate Your BMI</h3>
                                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus
                                    et netus et.</p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                                    <div className="calculate-bmi">

                                        <input className="radio" id="one" name="group" type="radio" checked />
                                        <input className="radio" id="two" name="group" type="radio" />

                                        <div className="tabs">
                                            <label className="tab" id="one-tab" htmlFor="one">Female</label>
                                            <label className="tab" id="two-tab" htmlFor="two">Male</label>
                                        </div>
                                        <div className="panels">
                                            <div className="panel" id="one-panel">
                                                <form>
                                                    <input type="number" name="Age" placeholder="Age" />
                                                    <input type="number" name="Weight" placeholder="Weight / kg" />
                                                    <input type="number" name="Height" placeholder="Height / cm" />
                                                    <select className="nice-select Advice">

                                                        <option>Place Holder </option>
                                                        <option>Dropdown list item</option>
                                                        <option>Dropdown list item</option>
                                                        <option>Dropdown list item</option>
                                                        <option>Dropdown list item</option>
                                                        <option>Dropdown list item</option>

                                                    </select>
                                                    <a href="javascript:void(0)" className="button calculate">Calculate</a>
                                                </form>
                                            </div>
                                            <div className="panel" id="two-panel">
                                                <form>
                                                    <input type="number" name="Age" placeholder="Age" />
                                                    <input type="number" name="Weight" placeholder="Weight / kg" />
                                                    <input type="number" name="Height" placeholder="Height / cm" />
                                                    <select className="nice-select Advice">

                                                        <option>Place Holder </option>
                                                        <option>Place Holder 1</option>
                                                        <option>Place Holder 2</option>
                                                        <option>Place Holder 3</option>

                                                    </select>
                                                    <a href="javascript:void(0)" className="button calculate">Calculate</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="weight-scale">
                                        <img alt="weight-girl" src={WeightScaleIcon} />
                                        <p>Fill out the form to calculate
                                            calories for weight loss</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CalculatorSection;