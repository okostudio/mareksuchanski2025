import ScrollContainer from "../animation/ScrollContainer";
import OurBrands from "./Brands";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container center">
                <div>
                    <ScrollContainer>
                        <h2 className="xl">
                            Let&rsquo;s make <br />scroll stopping <br />content!
                        </h2>
                    </ScrollContainer>
                    <OurBrands />
                </div>
            </div>
        </section >
    );
};

export default About;