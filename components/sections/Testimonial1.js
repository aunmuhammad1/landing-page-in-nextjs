'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>Join Our Pilot Community</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "Trinzz revolutionized our computer vision projects. With their tailored models and
automated dataset curation, we achieved unparalleled accuracy and efficiency."
                                            </p>
                                            <div className="author-details">
                                                <h5>John Doe</h5>
                                                <span>Chief Technology Officer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>Join Our Pilot Community</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "We've tried various computer vision platforms, but Trinzz stood out with its exceptional
performance. The reinforcement feedback loops ensured constant improvement,
leading to remarkable results."
                                            </p>
                                            <div className="author-details">
                                                <h5>Jane Smith</h5>
                                                <span>Data Scientist</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>Join Our Pilot Community</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "Trinzz has been instrumental in our success. Their platform's speed and accuracy
surpassed our expectations, allowing us to deliver cutting-edge solutions to our clients."
                                            </p>
                                            <div className="author-details">
                                                <h5>Michael Johnson</h5>
                                                <span>Project Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>Join Our Pilot Community</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "Using Trinzz was a game-changer for us. Their expertly curated models and
customization options enabled us to tackle complex computer vision tasks with ease,
saving us time and resources."
                                            </p>
                                            <div className="author-details">
                                                <h5>Sarah Brown</h5>
                                                <span>Machine Learning Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, maximus eu mauris.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
