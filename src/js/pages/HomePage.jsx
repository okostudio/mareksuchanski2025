import PageWrapper from './PageWrapper'
import Hero from '../components/Hero'
import ContactUs from '../components/ContactUs'

import { useRef } from 'react'
// import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import About from '../components/About'
import { Analytics } from "@vercel/analytics/react"
import Preloader from '../components/Preloader'


function HomePage() {
    const contactFormRef = useRef()




    return (
        <>
            <PageWrapper>
                <Hero contactRef={contactFormRef} />

                <About />
                <Work displayCount={6} />
                <div ref={contactFormRef}>
                    <ContactUs />
                </div>
                <Analytics />

            </PageWrapper>
            <Preloader />
        </>
    )
}

export default HomePage
