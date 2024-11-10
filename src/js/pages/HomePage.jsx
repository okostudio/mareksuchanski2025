
import Nav from '../components/Nav'
import Hero from '../components/Hero'
// import Testemonials from './components/Testemonials'
import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import About from '../components/About'
import OurBrands from '../components/Brands'

function HomePage() {

    return (
        <>
            <Nav />
            <Hero />
            <div className="fade"></div>

            <About class="about light heightAuto">
                <h2>
                    We&rsquo;re a versatile digital production agency, based in Melbourne, Sydney and Auckland. We specialise in rapid delivery with a high quality finish.
                </h2>
            </About>
            <OurBrands />
            <Capabilities />
            <Work />
            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default HomePage
