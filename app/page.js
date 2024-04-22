import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Section from "@/components/sections/Section"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Marque1 />
                <About1 />
                <Service1 />
                <Achievement1 />
                <Section/>
                <Brand1 />
                <Project1 />
                <Testimonial1 />
                <Team1 />
                <Faq1 />
                <Cta1 />
            </Layout>
        </>
    )
}