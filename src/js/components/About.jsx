import ScrollContainer from "../animation/ScrollContainer";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container center">
                <div>
                    <ScrollContainer>
                        <h2>
                            Your local digital production agency. Based in Melbourne, Sydney and Auckland. <span className="red">We make scroll stopping content for breakfast.</span>
                        </h2>
                    </ScrollContainer>
                </div>
            </div>
        </section >
    );
};

export default About;