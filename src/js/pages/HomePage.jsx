import PageWrapper from './PageWrapper'
import Hero from '../components/Hero'
import ContactUs from '../components/ContactUs'

import { useRef } from 'react'
// import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import About from '../components/About'


function HomePage() {
    const contactFormRef = useRef()

    return (
        <PageWrapper>
            <Hero contactRef={contactFormRef} />

            <About />
            <Work />
            <div ref={contactFormRef}>
                <ContactUs />
            </div>
        </PageWrapper>
    )
}

export default HomePage
