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


            <About />
            <OurBrands />
            <Capabilities />
            <Work />
        </PageWrapper>
    )
}

export default HomePage
