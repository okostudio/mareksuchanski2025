import ScrollContainer from "../animation/ScrollContainer";
import OurBrands from "./Brands";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container center">
                <div>
                    <ScrollContainer>
                        <h3 className="">
                            Creative developer with 17+ years of delivering rich, interactive experiences for leading agencies and global brands.
                            Delivering modern javascript, with an eye for motion and optimisation.
                            Trusted by several of Australia and New Zealand’s top agencies, with long spanning partnerships based on speed, precision and reliability.
                        </h3>
                    </ScrollContainer>
                    <OurBrands />
                </div>
            </div>
        </section >
    );
};

export default About;