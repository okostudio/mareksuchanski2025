import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";

// import { v4 as uuidv4 } from 'uuid';
import useResize from '../hooks/UseResize';
import { useEffect, useRef, useState } from 'react';



const OurBrands = () => {
    const size = useResize()
    const [isMobile, setIsMobile] = useState(false)
    const brands = useRef()

    useEffect(
        () => {
            if (size > 1023) {
                setIsMobile(false)
            } else {
                setIsMobile(true)
                console.log("IS MOBILE")
            }
        },
        [size]
    )

    useGSAP(
        () => {


            const rows = isMobile ? 5 : 3;
            const tl = new gsap.timeline({ repeat: -1 })

            for (let i = 0; i < rows; i++) {
                let selector = ""
                if (isMobile) {
                    selector = ".mobile_logo" + (i + 1)
                } else {
                    selector = ".desktop_logo" + (i + 1)
                }
                tl.from(selector, { duration: 1, y: "1em", opacity: 0, ease: Power3.easeOut, stagger: 0.1 }, "-=0.2")
                tl.to(selector, { duration: 1, y: "-1em", opacity: 0, ease: Power3.easeIn, stagger: 0.1 }, "+=0.5")
            }



        }, [brands]
    )

    return (
        <section className="our-brands light">
            <div className="container center">
                <div>
                    <div className="brands">
                        {/* <h3>
                            Brands we&rsquo;ve helped
                        </h3> */}
                        <div className="brands__content" ref={brands}>
                            <img src="/img/logos/logo-confitex.svg" alt="brand" className="brand__logo mobile_logo1 desktop_logo1" />
                            <img src="/img/logos/logo-cricketnz.svg" alt="brand" className="brand__logo mobile_logo1 desktop_logo1" />
                            <img src="/img/logos/logo-eden.svg" alt="brand" className="brand__logo mobile_logo1 desktop_logo1" />
                            <img src="/img/logos/logo-enviz.svg" alt="brand" className="brand__logo mobile_logo2 desktop_logo1" />
                            <img src="/img/logos/logo-f45.svg" alt="brand" className="brand__logo mobile_logo2 desktop_logo1" />
                            <img src="/img/logos/logo-heineken.svg" alt="brand" className="brand__logo mobile_logo2 desktop_logo2" />
                            <img src="/img/logos/logo-petdirect.svg" alt="brand" className="brand__logo mobile_logo3 desktop_logo2" />
                            <img src="/img/logos/logo-purenz.svg" alt="brand" className="brand__logo mobile_logo3 desktop_logo2" />
                            <img src="/img/logos/logo-ziwi.svg" alt="brand" className="brand__logo mobile_logo3 desktop_logo2" />
                            <img src="/img/logos/logo-scti.svg" alt="brand" className="brand__logo mobile_logo4 desktop_logo2" />
                            <img src="/img/logos/logo-stihl.svg" alt="brand" className="brand__logo mobile_logo4 desktop_logo3" />
                            <img src="/img/logos/logo-threenow.svg" alt="brand" className="brand__logo mobile_logo4 desktop_logo3" />
                            <img src="/img/logos/logo-westpac.svg" alt="brand" className="brand__logo mobile_logo5 desktop_logo3" />
                            <img src="/img/logos/logo-yates.svg" alt="brand" className="brand__logo mobile_logo5 desktop_logo3" />
                            <img src="/img/logos/logo-z-energy.svg" alt="brand" className="brand__logo mobile_logo5 desktop_logo3" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurBrands;



