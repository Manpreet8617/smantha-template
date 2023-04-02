import Post1 from "../assets/img/Post-1.jpg"
import Post2 from "../assets/img/Post-2.jpg"
import Post3 from "../assets/img/Post-3.jpg"
import Post4 from "../assets/img/Post-4.jpg"

function BlogSection() {
    return (
        <section className="blog-section gap no-bottom" style={{"background-image": "url(./assets/img/blur-3.png)"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                        <div className="heading">
                            <h3>Healthy Tips
                                & Tricks</h3>
                            <p>Duis at consectetur lorem donec
                                massa sapien faucibus et molestie.
                                Ut etiam sit amet nisl purus. Massa tempor
                                nec feugiat nisl pretium.</p>
                            <a href="blog-style-1.html" className="button">view all tips</a>

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="300"
                        data-aos-duration="500">
                        <div className="Post hover-style">
                            <div className="Post-1">
                                <span><a href="javascript:void(0)">food</a></span>
                                <p><a href="javascript:void(0)">Title. Lorem ipsum dolor sit amet</a></p>
                                <a href="blog-style-1.html">Read More<i className="fa-solid fa-arrow-right"></i></a>
                                <h6><i className="fa-regular fa-calendar-days"></i>June 06, 2022</h6>
                            </div>
                            <figure>
                                <img alt="Post-1" src={Post1} />
                            </figure>
                        </div>
                        <div className="Post-2 Post-1 hover-style">
                            <figure>
                                <img alt="Post-2" src={Post2} />
                            </figure>
                            <span><a href="javascript:void(0)">health</a></span>
                            <span><a href="javascript:void(0)">lifestyle</a></span>
                            <p><a href="javascript:void(0)">Title. Lorem ipsum dolor sit amet</a></p>
                            <h5>Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris…</h5>
                            <a href="blog-style-1.html">Read More<i className="fa-solid fa-arrow-right"></i></a>
                            <div className="Post-details">
                                <h4><span>By</span> Hana Evans</h4>
                                <div className="Post-data">
                                    <h6><i className="fa-regular fa-calendar-days"></i>June 06, 2022</h6>
                                    <h6><i className="fa-solid fa-share"></i>5</h6>
                                    <h6><i className="fa-regular fa-message"></i>87</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="400"
                        data-aos-duration="600">
                        <div className="Post-2 Post-1 post-4 hover-style">
                            <figure>
                                <img alt="Post-2" src={Post3} />
                            </figure>
                            <span><a href="javascript:void(0)">health</a></span>
                            <span><a href="javascript:void(0)">lifestyle</a></span>
                            <p><a href="javascript:void(0)">Title. Lorem ipsum dolor sit amet</a></p>
                            <h5>Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris…</h5>
                            <a href="blog-style-1.html">Read More<i className="fa-solid fa-arrow-right"></i></a>
                            <div className="Post-details">
                                <h4><span>By</span> Hana Evans</h4>
                                <div className="Post-data">
                                    <h6><i className="fa-regular fa-calendar-days"></i>June 06, 2022</h6>
                                    <h6><i className="fa-solid fa-share"></i>5</h6>
                                    <h6><i className="fa-regular fa-message"></i>87</h6>
                                </div>
                            </div>
                        </div>
                        <div className="Post hover-style">
                            <div className="Post-1">
                                <span><a href="javascript:void(0)">food</a></span>
                                <p><a href="javascript:void(0)">Title. Lorem ipsum dolor sit amet</a></p>
                                <a href="blog-style-1.html">Read More<i className="fa-solid fa-arrow-right"></i></a>
                                <h6><i className="fa-regular fa-calendar-days"></i>June 06, 2022</h6>
                            </div>
                            <figure>
                                <img alt="Post-1" src={Post4} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;