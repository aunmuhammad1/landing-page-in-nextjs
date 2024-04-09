import React from 'react'
import '../App.css'
import IntroImg from './img/intro-img.svg'

export default function Intoduction() {
  return (
    <section id="intro" className="clearfix">
        <div className="container">

            <div className="intro-img">
                <img src={IntroImg} alt="" className="img-fluid"/>
            </div>

            <div className="intro-info">
                <h2>Empower Your Computer Vision Projects  <br/>with <span>Trinzz</span></h2>
                <p>Unlock the Potential of Computer Vision with Trinzz's Fine Tuning Services</p>
                <p>Trinzz specializes in fine-tuning computer vision models using cutting-edge automation and in-house expertise. Our streamlined approach ensures rapid delivery of custom computer vision models and fine-tuning services, setting new records for speed and efficiency.</p>
                <div>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <a href="#services" className="btn-services scrollto">Our Services</a>
                </div>
            </div>

        </div>
    </section>
  )
}
