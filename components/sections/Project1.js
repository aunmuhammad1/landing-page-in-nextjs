
import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project1() {
    return (
        <>
            <section className="project-section section-padding pt-0 fix" id="project">
                <h3 style={{
                    textAlign: "center",
                    marginBottom: "50px",
                    marginTop: "50px",
                    fontWeight: "bold",
                    fontSize: "30px",
                }}>Trinzz can have applications across <br/>
                    many industries
                </h3>
                <p
                    style={{
                        textAlign: "center",
                        marginBottom: "50px",
                        fontSize: "15px",
                        marginLeft: "50px",
                        marginRight: "50px",
                    }}
                >Trinzz is built to redefine automation by using computer vision tools across industries, <br/> giving
your machines and applications the power to detect, segment, modify or track objects. Here are
some of the sample use cases</p>
                <ProjectSlider1 showDots/>
            </section>
        </>
    )
}
