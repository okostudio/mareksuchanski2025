import ScrollContainer from "../animation/ScrollContainer";


const About = () => {
    return (
        <section className="about light heightAuto" >
            <div className="container center">
                <div>
                    <ScrollContainer>
                        <h2 className="xl">
                            We make <br />scroll stopping <br />content.
                        </h2>
                    </ScrollContainer>
                </div>
            </div>
        </section >
    );
};

export default About;