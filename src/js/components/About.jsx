import ScrollContainer from "../animation/ScrollContainer";
import OurBrands from "./Brands";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container">
                <div>
                    {/* <ScrollContainer> */}
                    <h2 className="xl">MAREK <br />
                        SUCHANSKI</h2>
                    <p className="xl">
                        has been making rich, interactive experiences for leading agencies and global brands for over 17 years.
                        Delivering modern javascript, with an eye for motion and optimisation.
                    </p>
                    <p className="xl">
                        Trusted by Australia & New Zealand’s top agencies, with long spanning partnerships founded on speed, precision and reliability.
                    </p>
                    {/* </ScrollContainer> */}
                    <OurBrands />
                </div>
            </div>
        </section >
    );
};

export default About;