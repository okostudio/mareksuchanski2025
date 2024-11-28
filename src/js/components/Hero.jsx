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
const Hero = () => {

    const scrollAnimation = useRef();

    useGSAP(
        () => {
            gsap.context(() => {

                let split = SplitText.create(("h1,p"), { type: "words,lines", linesClass: "line++", overflow: "hidden" });
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: scrollAnimation.current,
                        start: "top 85%",
                    }
                });
                tl.addLabel("start")
                tl.from(split.lines, {
                    opacity: 0,
                    y: "0.5em",
                    duration: 0.5,
                    stagger: 0.07,
                    ease: "power3.out"
                })

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
        <section className="hero green">
            {/* <div className="video-holder">
                <video width="100%" height="100%" playsInline loop muted autoPlay>
                    <source src="/video/particles-v3.mp4" type="video/mp4" />
                    <source src="/video/particles-v3.webm" type="video/webm" />
                </video>
            </div> */}
            <div className="container left">
                <div className="left-col">
                    <div className="arch"></div>
                    <div ref={scrollAnimation}>
                        <h1>
                            Your <br />
                            trusted <br />
                            digital <br />
                            production <br />
                            partner.
                        </h1>

                        <div className="card">
                            <p className='p1'>
                                100’s of dispatched campaigns. <br />
                                1000’s of banners, videos, <br />
                                emails, websites & more.
                            </p>
                            <button className='red'>Get in touch</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
