

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
                    <h3>
                        <span className="green">Our capabilities are centred around our ability to deliver world-class digital campaigns and award winning websites.</span> Whether in banner ads, digital billboards, social videos or websites, we will bring our keen eye for detail, sense for motion.
                    </h3>
                </div>


                <div className="capabilities__content">
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-01.svg"
                        title="HTML5 Banners"
                        description="We are fully certified for most rich media platforms, and have the capcity to roll out massive campaigns in record time"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Social Ads & Videos"
                        description="We can take your static campaigns, slice them up, and bring them to life with scroll-stopping animation"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-03.svg"
                        title="Website Development"
                        description="We can build rich and emmersive website from the ground up, or using any framework you like"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Interaction Design"
                        description="The cherry on top of a great website, is a rich interactive experience"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-04.svg"
                        title="3D Animation"
                        description="Take your work to a new dimention"
                    />
                    <CapabilitiesItem
                        img="/img/capabilities/capabilities-02.svg"
                        title="Literally anything!"
                        description="If you have a vision, we can help you realize it"
                    />

                </div>
            </div>
        </section >
    );
};

export default Capabilities;
