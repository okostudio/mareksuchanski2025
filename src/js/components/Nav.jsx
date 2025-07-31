// import ContactForm from "../elements/ContactForm";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    // const [navIsOpen, setNavIsOpen] = useState(false)

    // const toggleNav = () => {
    //     setNavIsOpen(!navIsOpen);
    // }

    return (
        <nav>
            <div className="container">
                <div className="nav-logo">
                    <Link to={"/"}>
                        <img src="/logo-okostudio.svg" alt="OKO Studio Logo" />
                    </Link>
                </div>
            </div>
            {/* <div className="nav-menu-icon" onClick={() => { toggleNav() }}>
                <div className={"nav__menu" + (navIsOpen ? " open" : " closed")} onClick={() => { toggleNav() }}>

                    {navIsOpen ?

                        // <ul className="menu">
                        //     <li><a href="">About</a></li>
                        //     <li><a href="">Work</a></li>
                        //     <li><a href="">Contact</a></li>
                        // </ul>
                        <section className="contact black">
                            <div className="container center">
                                <div>
                                    <div className="contact__content">
                                        <h2 className="white">
                                            Let&rsquo;s get in touch
                                        </h2>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </section >

                        : null}

                </div>
                <svg width="80" height="50" viewBox="0 0 80 50">
                    <path d="M80,0H0l9.7,38.7c1.7,6.6,7.6,11.3,14.4,11.3h55.9V0Z" />

                    <g id="burger">
                        <path className="white" d="M30,18,L55,18" />
                        <path className="white" d="M30,25,L55,25" />
                        <path className="white" d="M30,32,L55,32" />
                    </g>
                </svg>
            </div> */}
        </nav>
    );
};

export default Nav;
