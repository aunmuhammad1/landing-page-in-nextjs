import React from 'react'
import '../App.css';
import AboutIMG from  './img/about-img.svg';
import AboutExtra1 from './img/about-extra-1.svg';
import AboutExtra2 from './img/about-extra-2.svg';

import InsightsIcon from '@mui/icons-material/Insights';
import AccountBox from '@mui/icons-material/AccountBox';


export default function AboutUs() {
    return (
        <section id="about">
            <div className="container">

                <header className="section-header">
                    <h3>Our Comprehensive Services</h3>
                    <p>Accelerate Your Computer Vision Projects with Trinzz</p>
                </header>

                <div className="row about-container">

                    <div className="col-lg-6 content order-lg-1 order-2">
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p> */}

                        <div className="icon-box wow fadeInUp">
                            <div className="icon"><i className="fa fa-code"></i></div>
                            <h4 className="title"><a href="">Custom Model Development</a></h4>
                            <p className="description">Harness the power of our in-house computer vision expertise to develop custom models tailored to your specific needs.</p>
                        </div>

                        <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon">
                                <InsightsIcon color="primary" />
                            </div>
                            <h4 className="title"><a href="">Automated Fine Tuning</a></h4>
                            <p className="description">Utilize our advanced automation techniques to fine-tune your models with unprecedented speed and accuracy.</p>
                        </div>

                        <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon">
                                <AccountBox color="primary" />
                            </div>
                            <h4 className="title"><a href="">Expert Guidance</a></h4>
                            <p className="description">Benefit from the guidance of our experienced team, who will work closely with you to ensure the success of your computer vision projects.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                        <img src={AboutIMG} className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="row about-extra">
                    <div className="col-lg-6 wow fadeInUp">
                        <img src={AboutExtra1} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                        <p>
                            Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
                        </p>
                        <p>
                            Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
                        </p>
                    </div>
                </div>

                <div className="row about-extra">
                    <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                        <img src={AboutExtra2} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                        <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                        <p>
                            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
                        </p>
                        <p>
                            Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                        </p>
                        <p>
                            Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                        </p>
                    </div>
                
                </div>
            </div>
        </section>
    )
}
