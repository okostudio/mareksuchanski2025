import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "../plugins/DrawSVGPlugin.js";
import { SplitText } from "../plugins/SplitText.js";


gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase);



const ScrollContainer = (props) => {

    const container = useRef();
    useGSAP(() => {

        let split = SplitText.create(container.current.querySelector("h1,h2"), { type: "words,lines", linesClass: "line++", overflow: "hidden" });
        console.log(split)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                // pin: false,
                start: "top 85%",
                // // end: "-=20vh",
                // scrub: 0.3,
                // snap: {
                //     // snapTo: "labels",
                //     duration: { min: 0.5, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                //     delay: 0.1,
                //     ease: "power2.inOut"
                // }
            }
        });
        tl.addLabel("start")
        tl.from(split.lines, {
            opacity: 0,
            y: "0.5em",
            duration: 0.5,
            stagger: 0.1
        })
        tl.addLabel("end")
        return () => split.revert();

    }, { scope: container });

    return (

        <div className="scroll-wrrapper" ref={container}>
            {props.children}
        </div>
    )
}



export default ScrollContainer;