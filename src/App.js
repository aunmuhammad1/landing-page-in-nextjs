import './App.css';
import Header from './sections/Header';
import Intoduction from './sections/Intoduction';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Client from './sections/Client';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header/>
      <Intoduction/>
      <main id="main">
        <AboutUs/>
        <Services/>
        <WhyUs/>
        <Portfolio/>
        <Testimonials/>
        <Team/>
        <Client/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
