
const Section = (props) => {
    return (
        <section className={(props.class ? props.class : null)}>
            <div className={"container " + (props.containerClass ? props.containerClass : "center")}>
                <div>
                    {props.children}
                </div>
            </div>
        </section >
    );
};

export default Section;