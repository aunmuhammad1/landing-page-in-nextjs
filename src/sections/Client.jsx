import React from 'react'
import '../App.css'

import client1 from './img/clients/client-1.png';
import client2 from './img/clients/client-2.png';
import client3 from './img/clients/client-3.png';
import client4 from './img/clients/client-4.png';
import client5 from './img/clients/client-5.png';
import client6 from './img/clients/client-6.png';
import client7 from './img/clients/client-7.png';
import client8 from './img/clients/client-8.png';



export default function Client() {
    return (
        <section id="clients" className="section-bg">

        <div className="container">

            <div className="section-header">
            <h3>Our CLients</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>
            </div>

            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client1} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client2} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client3} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client4} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client5} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client6} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client7} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                <img src={client8} className="img-fluid" alt=""/>
                </div>
            </div>

            </div>

        </div>

        </section>
    )
}
