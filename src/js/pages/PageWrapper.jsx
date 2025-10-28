
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import ContactUs from '../components/ContactUs'
import { useEffect, useRef } from 'react'
import { useMouse } from '../hooks/UseMouse'
import Logo from '../components/Logo';


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "../plugins/ScrollSmoother.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function PageWrapper(props) {
    const { mousePosition, mouseMovement } = useMouse();
    const cursor = useRef();
    const scrollSmoothContentRef = useRef();


    useEffect(() => {
        // const rad = Math.atan(mouseMovement.y / mouseMovement.x)
        // const angle = rad ? 180 / Math.PI * rad : 0;
        cursor.current.style.transform = `
            translate(${mousePosition.x}px,${mousePosition.y}px) 
            `
        // rotate(${angle}deg) 
        // scaleX(${Math.max(1, Math.min(5, Math.sqrt(Math.pow(mouseMovement.x, 2) + Math.pow(mouseMovement.y, 2))))}) 
    }, [mousePosition, mouseMovement,])


    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: "#scroll-smooth-wrapper",
            content: "#scroll-smooth-content",
            smooth: 2,
            smoothTouch: 0.2,
        })
    }, [])


    return (
        <>
            <Nav />
            <div id='scroll-smooth-wrapper'>
                <div id='scroll-smooth-content' ref={scrollSmoothContentRef}>

                    {props.children}

                    <Footer />

                </div>
            </div>
            <div className="noise"></div>
            <div className="cursor" ref={cursor}></div>
            <Logo />
        </>
    )
}

export default PageWrapper
