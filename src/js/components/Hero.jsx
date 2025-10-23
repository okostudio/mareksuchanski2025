import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "../plugins/DrawSVGPlugin.js";
import { SplitText } from "../plugins/SplitText.js";


gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase);

// import ScrollContainer from "../animation/ScrollContainer";

// import React from "react";
const Hero = (props) => {

    const heroRef = useRef();
    const contactRef = props.contactRef

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
                        start: 'top 30%',
                        end: 'bottom center',
                        // markers: true,
                        scrub: true,
                    }
                })
                    .addLabel("start")
                    .from(".video-holder video", { scale: 1.5, duration: 2, ease: "sine.inOut" })
                    .from(".video-holder", { y: "-33vh", opacity: 0.8, duration: 2, ease: "sine.out" }, "<0")

            }, heroRef)
        }
        , [heroRef]
    )

    return (
        <section className="hero" ref={heroRef}>
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

                            <div className="card">
                                <button className='black' onClick={slideToContact}>Get&nbsp;in&nbsp;touch</button>
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

            </div>

        </section>
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
