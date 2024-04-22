import BrandSlider1 from "../slider/BrandSlider1"


export default function Brand1() {
    return (
        <>
            <div className="brand-section fix section-padding pt-0">
                <div className="container">
                    <div className="brand-wrapper">
                        <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">Fits Seamlessly within Your Tech Stack</h6>
                        <p style={{
                            textAlign : "center",
                            marginBottom : "25px",
                        }} >Enhance your workflow with our extensive array of open APIs, SDKs, developer tools,
and comprehensive documentation. Effortlessly tailor, automate, and broaden your
pipeline to seamlessly integrate with other applications.</p>
                        <BrandSlider1 />
                    </div>
                </div>
            </div>
        </>
    )
}
