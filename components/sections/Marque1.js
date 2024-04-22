import './marquee.css';

export default function Marque1() {
    return (
        <>
            <div className="marque-section"
                style={{
                    marginTop: "20px",                
                }} 
            >
                <div className="marquee-wrapper text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex ">
                            <li className="marquee-item">
                                <span className="slider_txt">Custom Models</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Dataset Building</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Training Algorithms</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Data Annotation</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Universal Deployment</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Seamless Integration</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                                <span className="slider_txt">Turn-key Support</span><span className="text-slider"><img className='starclass' src="/assets/img/star.svg" alt="img" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
