import ScrollContainer from "../animation/ScrollContainer";
import OurBrands from "./Brands";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container center">
                <div>
                    <ScrollContainer>
                        <h2 className="xl">Marek Suchanski</h2>
                        <h3 className="">
                            Has been making rich, interactive experiences for leading agencies and global brands for over 17 years.
                            Delivering modern javascript, with an eye for motion and optimisation.
                        </h3>
                        <h3>
                            Trusted by Australia & New Zealand’s top agencies, with long spanning partnerships based on speed, precision and reliability.
                        </h3>
                    </ScrollContainer>
                    <OurBrands />
                </div>
            </div>
        </section >
    );
};

export default About;