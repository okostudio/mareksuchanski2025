

const About = (props) => {
    return (
        <section className={(props.class ? props.class : null)}>
            <div className="container center">
                <div>
                    {props.children}
                </div>
            </div>
        </section >
    );
};

export default About;