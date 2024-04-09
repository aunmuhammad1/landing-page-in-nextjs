import React from 'react'
import '../App.css'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>Trinzz</h3>
                            <p>Trinzz specializes in fine-tuning computer vision models using cutting-edge automation and in-house expertise. Our streamlined approach ensures rapid delivery of custom computer vision models and fine-tuning services, setting new records for speed and efficiency.</p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br/>
                                New York, NY 535022<br/>
                                United States <br/>
                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/>
                            </p>

                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Greetings, Visionaries!</p>
                            <p>At Trinzz, we're passionate about propelling your projects into the future with our state-of-the-art computer vision fine-tuning services. Our mission is to bridge the gap between your vision and its realization with unparalleled speed and precision.</p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>Trinzz</strong>. All Rights Reserved
                </div>
                <div className="credits">
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: 
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}
