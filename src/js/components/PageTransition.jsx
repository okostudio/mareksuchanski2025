import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RoundEndNegative } from '../elements/Svgs.jsx';
gsap.registerPlugin(useGSAP);


// import React from "react";
const PageTransition = (props) => {

    // black background
    const { isRed } = props;

    const loaderRef = useRef();
    useGSAP(
        () => {
            gsap.context(() => {
                const tl = gsap.timeline({
                    // scrollTrigger: {
                    //     trigger: scrollAnimation.current,
                    //     start: 'top center',
                    //     end: 'bottom center',
                    //     scrub: false,
                    // }
                })
                tl.addLabel("start")
                    .to(loaderRef.current, {
                        duration: 1.01,
                        y: "-100%",
                        display: "none",
                        ease: "power4.inOut"
                    }, "+=0.2")
                    .to(".rounded-end", {
                        duration: 1.01,
                        scaleY: 0,
                        ease: "power4.inOut"
                    }, "-=1.01")
                    .addLabel("end")
            }, loaderRef)
        }
        , [loaderRef]
    )

    return (
        <section className={`section__loader ${isRed ? "" : "black"}`} ref={loaderRef}>
            <div className="rounded-end negative">
                <RoundEndNegative />
            </div>
        </section>
    );
};

export default PageTransition;
