import PageWrapper from './PageWrapper'
import Hero from '../components/Hero'
import ContactUs from '../components/ContactUs'
import { CloseXIcon } from "../elements/Svgs";

import { useRef, useState } from 'react'
// import Capabilities from '../components/Capabilities'
import Work from '../components/Work'
import About from '../components/About'
import { Analytics } from "@vercel/analytics/react"
import Preloader from '../components/Preloader'


function HomePage() {
    const contactFormRef = useRef()
    const videoOverlayRef = useRef()

    const [showVideo, setShowVideo] = useState(false)



    return (
        <>
            <PageWrapper>
                <Hero contactRef={contactFormRef} setShowVideo={setShowVideo} />

                <About />
                <Work displayCount={6} />
                <div ref={contactFormRef}>
                    <ContactUs />
                </div>
                <Analytics />

            </PageWrapper>
            {
                showVideo
                    ?

                    <section className='video-overlay black'>
                        <div className="video-aspect">
                            <video ref={videoOverlayRef} playsInline loop controls autoPlay preload='true' poster={"/video/showreel_2025.jpg"}>
                                <source src="/video/showreel_2025-xl.mp4" type="video/mp4" />
                                <source src="/video/showreel_2025-xl.webm" type="video/webm" />
                            </video>
                            <div className="button-close"
                                onClick={() => { setShowVideo(false) }}
                            >
                                <CloseXIcon />
                            </div>
                        </div>
                    </section>

                    :
                    null
            }
            <Preloader />
        </>
    )
}

export default HomePage
