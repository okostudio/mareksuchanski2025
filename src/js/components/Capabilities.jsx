

const CapabilitiesItem = (props) => {
    return (
        <div className="capabilities__item">
            <h4>
                {props.title}
            </h4>
            <div className="capabilities__item__image">
                <img src={props.img} alt="" />
            </div>
            <div className="capabilities__item__description h4">
                <p className="p3">
                    {props.description}
                </p>
            </div>

        </div>
    )
}

const Capabilities = () => {
    return (
        <section className="capabilities light">
            <div className="container left">


                <div className="capabilities__title">
                    <h2>
                        Our Capabilities
                    </h2>
                    <div className="capabilities__description">
                        Our team have experience in across a wide range of technologies and tallents, all unifying by a keen eye for motion. Whether in banner ads, digital billboards, social videos or websites. We can confidently take on any digital production task.
                    </div>
                </div>


                <div className="capabilities__content">
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-01.svg"
                        title="HTML5 Banners"
                        description="We are fully certified for most rich media platforms, and have the capcity to roll out massive campaigns in record time"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Motion graphics"
                        description="Whatever the end size, we are here to make your work look schmick"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-03.svg"
                        title="Social Ads & Videos"
                        description="We can take your static campaigns, slice them up, and bring them to life with scroll-stopping animation"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Website Development"
                        description="Whatever the end size, we are here to make your work look schmick"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-04.svg"
                        title="3D Animation"
                        description="Take your work to a new dimention"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Literally anything!"
                        description="Whatever the end size, we are here to make your work look schmick"
                    />

                </div>
            </div>
        </section >
    );
};

export default Capabilities;
