
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 3,
        },

        575: {
            slidesPerView: 2,
        },

        0: {
            slidesPerView: 2,
        },
    },
}
export default function ProjectSlider1({ showDots }) {

    const evennumber = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
    const oddnumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]

    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {oddnumber.map((number, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-items">
                                <div className="project-image">
                                    <img src={`/assets/img/project/${number}.jpg`} alt="project-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div style={{
                    marginBottom: "30px",
                }} 
                ></div>
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {evennumber.map((number, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-items">
                                <div className="project-image">
                                    <img src={`/assets/img/project/${number}.jpg`} alt="project-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
            </div>
        </>
    )
}
