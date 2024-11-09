

const BrandLogo = (props) => {
    return (
        <img src={props.src} alt={props.src} className="brand__logo" />
    )
}

const logos = ["/img/logos/logo-confitex.svg",
    "/img/logos/logo-cricketnz.svg",
    // "/img/logos/logo-eden.svg",
    "/img/logos/logo-enviz.svg",
    "/img/logos/logo-f45.svg",
    "/img/logos/logo-heineken.svg",
    "/img/logos/logo-petdirect.svg",
    "/img/logos/logo-purenz.svg",
    "/img/logos/logo-ziwi.svg",
    "/img/logos/logo-scti.svg",
    "/img/logos/logo-stihl.svg",
    "/img/logos/logo-threenow.svg",
    "/img/logos/logo-westpac.svg",
    "/img/logos/logo-yates.svg",
    "/img/logos/logo-z-energy.svg",
]

const Introduction = () => {
    return (
        <section className="introduction light">
            <div className="container center">

                <div>

                    <h2>
                        We&rsquo;re a versatile digital production agency, based in Melbourne, Sydney and Auckland. We specialise in rapid delivery with a high quality finish.
                    </h2>

                    <div className="brands">
                        <h3>
                            Brands we&rsquo;ve helped
                        </h3>
                        <div className="brands__content">
                            {
                                logos.map(logo => {
                                    return <BrandLogo src={logo} key={"logo" + Math.random()} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Introduction;



