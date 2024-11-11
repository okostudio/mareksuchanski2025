import PageWrapper from './PageWrapper'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import About from '../components/About'
import OurBrands from '../components/Brands'


function HomePage() {

    return (
        <PageWrapper>
            <Hero />


            <About class="about light heightAuto">
                <h2>
                    We&rsquo;re a versatile digital production agency, based in Melbourne, Sydney and Auckland. We specialise in rapid delivery with a high quality finish.
                </h2>
            </About>
            <OurBrands />
            <Capabilities />
            <Work />
        </PageWrapper>
    )
}

export default HomePage
