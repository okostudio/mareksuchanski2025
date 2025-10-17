import ContactForm from "../elements/ContactForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const Nav = () => {

    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <nav>
            <div className="container">
                <div className="nav-logo">
                    <Link to={"/"}>
                        <img src="/logo-m-badge.svg" alt="MAREK SUCHANSKI" />
                    </Link>
                </div>
            </div>
            <div className="nav-menu-icon">
                <div className={"nav__menu" + (navIsOpen ? " open" : " closed")}>

                    {navIsOpen ?


                        // <section className="contact black">
                        //     <div className="container center">
                        //         <div>
                        //             <div className="contact__content">
                        //                 <h2 className="white">
                        //                     src/js/components/ContactUs.jsx
                        //                 </h2>
                        //                 <ContactForm />
                        //             </div>
                        //         </div>
                        //     </div>
                        // </section >
                        <ContactUs />

                        : null}

                </div>
                <svg width="80" height="50" viewBox="0 0 80 50" onClick={() => { toggleNav() }}>
                    <path d="M80,0H0l9.7,38.7c1.7,6.6,7.6,11.3,14.4,11.3h55.9V0Z" />

                    <g className={"burger" + (navIsOpen ? " open" : " closed")}>
                        <path className="white" d="M30,18,L55,18" />
                        <path className="white" d="M30,25,L55,25" />
                        <path className="white" d="M30,32,L55,32" />
                    </g>
                </svg>
            </div>
        </nav>
    );
};

export default Nav;
