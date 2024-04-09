import React from 'react'
import '../App.css'
import Testimonial1 from "./img/testimonial-1.jpg";
import Testimonial2 from "./img/testimonial-2.jpg";
import Testimonial3 from "./img/testimonial-3.jpg";
import Testimonial4 from "./img/testimonial-4.jpg";
import Testimonial5 from "./img/testimonial-5.jpg";


export default function Testimonials() {
    return (
        <section id="testimonials" className="section-bg">
            <div className="container">
                <header className="section-header">
                    <h3>Testimonials</h3>
                </header>
                <p style={{ textAlign : 'center' }} >Hear What Our Clients Have to Say About Trinzz</p>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="testimonials-carousel wow fadeInUp">
                            <div className="testimonial-item">
                                <img src={Testimonial1} className="testimonial-img" alt=""/>
                                <h3>John Doe</h3>
                                <h4>Computer Vision Engineer</h4>
                                <p>
                                    "Trinzz's fine-tuning services have revolutionized our computer vision projects, delivering exceptional results in record time."
                                </p>
                            </div>
                    
                            <div className="testimonial-item">
                                <img src={Testimonial4} className="testimonial-img" alt=""/>
                                <h3>Jane Smith</h3>
                                <h4>AI Developer</h4>
                                <p>
                                    "Thanks to Trinzz's expertise and automation, we were able to accelerate development timelines and achieve remarkable accuracy in our computer vision models."
                                </p>
                            </div>
                    
                            <div className="testimonial-item">
                                <img src={Testimonial5} className="testimonial-img" alt=""/>
                                <h3>Alex Johnson</h3>
                                <h4>Machine Learning Specialist</h4>
                                <p>
                                    "Trinzz's in-house computer vision expertise and streamlined processes have been invaluable in achieving our computer vision goals."
                                </p>
                            </div>
{/*                     
                            <div className="testimonial-item">
                                <img src={Testimonial2} className="testimonial-img" alt=""/>
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                            </div>
                    
                            <div className="testimonial-item">
                                <img src={Testimonial3} className="testimonial-img" alt=""/>
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <p>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
