import Accordion1 from "../elements/Accordion1"


export default function Faq1() {
    return (
        <>
            <section className="faq-section fix section-padding">
                <div className="right-shape">
                    <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
                </div>
                <div className="faq-shape-box">
                    <div className="faq-shape">
                        <img src="/assets/img/faq/shape.png" alt="shape-img" />
                    </div>
                </div>
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6 wow fadeInUp"  style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} data-wow-delay=".4s">
                                <div className="faq-image">
                                    <img src="/assets/img/faq/faq.png" alt="faq-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <p style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        color: "#000",
                                        marginBottom: "1.5rem"
                                    }} >FAQs</p>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <Accordion1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
