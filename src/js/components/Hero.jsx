import { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../plugins/SplitText.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// import React from "react";
const Hero = (props) => {
    // TODO this iscrude, fix later
    const isMobile = window.innerWidth < 768

    const [showVideo, setShowVideo] = useState(false)

    const heroRef = useRef();
    const videoOverlayRef = useRef();
    const contactRef = props.contactRef;

    const toggleVideo = (bool) => {
        setShowVideo(bool)
        if (videoOverlayRef && videoOverlayRef.current) {

            if (bool) {
                videoOverlayRef.current.play()
            }

        }
    }


    const slideToContact = () => {
        console.log("what", contactRef, contactRef.current)
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useGSAP(
        () => {
            gsap.context(() => {

                // let h1Split = SplitText.create(("h1"), { type: "words,lines", linesClass: "line line++", overflow: "hidden" });
                // let pSplit = SplitText.create(("p"), { type: "words,lines", linesClass: "line line++", overflow: "hidden" });
                gsap.timeline({
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: '100%',
                        pin: true,
                        // anticipatePin: 1,
                        // markers: true,
                        scrub: 2,
                    }
                })
                    .addLabel("start")
                    .to(".hero-top-layer", { y: "-100vh", duration: 1, ease: "linear" })
                    .to(".hero-top-layer .line, .hero-top-layer button", { y: "-100%", duration: 0.5, stagger: 0.1, ease: "power3.in" }, "<-0.6")
                    .to(".video-holder", { padding: isMobile ? "2em 1em" : "3em 4em 3 4em", duration: 1, ease: "sine.inout" }, "<1")
                    .from(".video-holder button", { y: "100%", duration: 0.25, ease: "sine.Out" }, "<0")
                    .from(".video-holder video, .video-holder img", { opacity: 0.8, duration: 0.1, ease: "sine.out" }, 0)

            }, heroRef)
        }
        , [heroRef]
    )

    return (
        <section className="hero black" ref={heroRef}>
            <div className="hero-top-layer">
                <div className="container">
                    <div className="left-col">

                        <div>
                            <h1>
                                <Line>Creative</Line>
                                <Line>developer</Line>
                                <Line>& motion</Line>
                                <Line>designer</Line>
                            </h1>
                            <div className='p1'>
                                <Line>17+ years experience across world leading agencies and brands</Line>
                            </div>

                            <div className="overflow-hidden">
                                <button className='black border-white' onClick={slideToContact}>Get&nbsp;in&nbsp;touch</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="video-holder">

                {
                    (window.innerWidth > window.innerHeight * 1.3) ?
                        <video playsInline loop muted autoPlay preload='true' poster={"/video/showreel_2025.jpg"}>
                            <source src="/video/showreel_2025-xl.mp4" type="video/mp4" />
                            <source src="/video/showreel_2025-xl.webm" type="video/webm" />
                        </video>
                        :
                        // <video width="100%" height="100%" playsInline loop muted autoPlay>
                        //     <source src="/video/showreel_2025_mobile.mp4" type="video/mp4" />
                        //     <source src="/video/showreel_2025_mobile.webm" type="video/webm" />
                        // </video>
                        <img src="/video/showreel_2025_mobile.gif" className='hero-video-fallback' alt="okokokokoko" />

                }
                <div className="button-holder"
                    onClick={() => { toggleVideo(true) }}

                >
                    <div className="overflow-hidden">
                        <button className="red inverted">View reel</button>
                    </div>
                </div>
            </div>

            {
                showVideo
                    ?

                    <section className='video-overlay black'>
                        <video ref={videoOverlayRef} playsInline loop controls autoPlay preload='true' poster={"/video/showreel_2025.jpg"}>
                            <source src="/video/showreel_2025-xl.mp4" type="video/mp4" />
                            <source src="/video/showreel_2025-xl.webm" type="video/webm" />
                        </video>
                        <div className="button-close"
                            onClick={() => { toggleVideo(!showVideo) }}
                        >
                            x
                        </div>
                    </section>

                    :
                    null
            }

        </section >
    );
};


const Line = (props) => {

    return (
        <div className="overflow-hidden">
            <div className="line">{props.children}</div>
        </div>
    )

}

export default Hero;
