// import ContactForm from "../elements/ContactForm";
import { useRef, useState } from "react";
import ContactUs from "./ContactUs";
import { EmailButtonIcon } from "../elements/Svgs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Nav = () => {
    const navRef = useRef()
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        if (navIsOpen) {
            // hide close icon
            new gsap.timeline()
                .fromTo(".email-button-icon .close-paths path", { drawSVG: "0% 100%" }, { duration: 0.3, drawSVG: "100% 100%", stagger: -0.1, ease: "power2.in" })
                .set(".email-button-icon .close-paths path", { display: "none" })
                .set(".email-button-icon .email-paths path", { display: "block" }, ">-0.1")
                .fromTo(".email-button-icon .email-paths path", { drawSVG: "0% 0%" }, { duration: 0.6, drawSVG: "0% 100%", stagger: 0.15, ease: "power2.inout" }, ">-0.1")

        } else {
            // hide email icon
            new gsap.timeline()
                .fromTo(".email-button-icon .email-paths path", { drawSVG: "0% 100%" }, { duration: 0.3, drawSVG: "100% 100%", stagger: -0.15, ease: "power2.out" })
                .set(".email-button-icon .email-paths path", { display: "none" })
                .set(".email-button-icon .close-paths path", { display: "block" }, ">-0.1")
                .fromTo(".email-button-icon .close-x1 path", { drawSVG: "0% 0%" }, { duration: 0.3, drawSVG: "0% 100%", stagger: 0.1, ease: "power2.inout" }, ">-0")
                .fromTo(".email-button-icon .close-x2 path", { drawSVG: "0% 0%" }, { duration: 0.3, drawSVG: "0% 100%", stagger: 0.1, ease: "power2.inout" }, ">-0.2")
        }
        setNavIsOpen(!navIsOpen);
    }

    useGSAP(
        () => {
            gsap.set(".email-button-icon .close-paths path", { display: "none" })
            gsap.from(".email-button-icon .email-paths path", { duration: 0.7, drawSVG: "0% 0%", stagger: 0.15, ease: "power2.inOut" }, 1.5)


            // gsap.from("nav",
            //     {
            //         x: 70,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: "nav",
            //             scrub: true,
            //             start: "100vh",
            //             end: "calc(100vh + 50px)",
            //             markers: true
            //         }
            //     })
        }, [navRef]
    )

    return (
        <>



            <nav ref={navRef}>
                <div className="nav-menu-icon">
                    <div className={"nav__menu" + (navIsOpen ? " open" : " closed")}>
                        {navIsOpen ?
                            <ContactUs />
                            : null}
                    </div>
                    <div
                        onClick={() => { toggleNav() }}
                    >
                        <EmailButtonIcon />
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Nav;