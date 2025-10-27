import OurBrands from "./Brands";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../plugins/SplitText.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {

    // TODO this iscrude, fix later
    // const isMobile = window.innerWidth < 768
    const aboutRef = useRef()

    useGSAP(
        () => {
            gsap.context(() => {

                // let h1Split = SplitText.create(("h1"), { type: "words,lines", linesClass: "line line++", overflow: "hidden" });
                let pSplit = SplitText.create(("p"), { type: "words,lines", linesClass: "line line++", overflow: "hidden" });
                gsap.timeline({
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        normalizeScroll: true,
                        start: '-60%',
                        end: 'bototm 20%',
                        pin: false,
                        // anticipatePin: 1,
                        markers: true,
                        scrub: 2,
                    }
                })
                    .addLabel("start")
                    .from("h2 .line", { y: "100%", duration: 1, stagger: 0.1, ease: "power3.Out" })
                    .from(pSplit.lines, { y: "50%", opacity: 0, duration: 1, stagger: 0.1, ease: "power3.Out" }, "<1")
                    .pause(2)


            }, aboutRef)
        }
        , [aboutRef]
    )

    return (
        <section className="about light heightAuto" ref={aboutRef} >
            <div className="container">
                <div>
                    {/* <ScrollContainer> */}
                    <h2 className="xl">
                        <Line>MAREK</Line>
                        <Line>SUCHANSKI</Line>
                    </h2>
                    <p className="xl">
                        has been making rich, interactive experiences for leading agencies and global brands for over 17 years.
                        Delivering modern javascript, with an eye for motion and optimisation.
                    </p>
                    <p className="xl">
                        Trusted by Australia & New Zealand’s top agencies, with long spanning partnerships founded on speed, precision and reliability.
                    </p>
                    {/* </ScrollContainer> */}
                </div>
            </div>
            <div className="container">
                <OurBrands />
            </div>
        </section >
    );
};

export default About;







const Line = (props) => {

    return (
        <div className="overflow-hidden">
            <div className="line">{props.children}</div>
        </div>
    )

}

