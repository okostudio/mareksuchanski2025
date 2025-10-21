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

    const scrollAnimation = useRef();
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
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: scrollAnimation.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: false,
                    }
                });
                tl.addLabel("start")
                tl.from("h1 .line", {
                    y: "100%",
                    duration: 0.5,
                    stagger: 0.07,
                    ease: "power3.out"
                }, "+=1.5")
                tl.from("p .line", {
                    opacity: 0,
                    y: "0.5em",
                    duration: 0.5,
                    stagger: 0.07,
                    ease: "power3.out"
                }, "+=0")

                tl.from("button", {
                    opacity: 0,
                    x: "-=10em",
                    width: "+=8em",
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out"
                }, "-=0.2")
                tl.addLabel("end")

            }, scrollAnimation)
        }
        , [scrollAnimation]
    )

    return (
        <section className="hero black">
            <div className="video-holder">
                <img src="/video/showreel_2025.jpg" className='hero-video-static' alt="okokokokoko" />
                {
                    (window.innerWidth > window.innerHeight * 1.3) ?
                        <video width="100%" height="100%" playsInline loop muted autoPlay>
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
            <div className="container left">
                <div className="left-col">

                    <div ref={scrollAnimation}>
                        <h1>
                            <Line>Creative</Line>
                            <Line>developer</Line>
                            <Line>& motion</Line>
                            <Line>designer</Line>
                        </h1>
                        <p className='p1'>
                            <Line>17+ years experience</Line><br />
                            <Line>across world leading agencies and brands</Line>
                        </p>

                        <div className="card">
                            <button className='red' onClick={slideToContact}>Get&nbsp;in&nbsp;touch</button>
                        </div>
                    </div>
                </div>

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
