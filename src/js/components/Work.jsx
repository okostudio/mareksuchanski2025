import { Link } from "react-router-dom";


const WorkItem = (props) => {
    return (
        <div className="work__item">
            <Link to={props.link}>
                <div className="work__item__image">
                    <img src={props.img} alt="" />
                </div>
                <div className="work__item__description p3">
                    {props.description}
                </div>
            </Link>
        </div>
    )
}

const Work = () => {
    return (
        <section className="work beige">
            <div className="container center">
                <div>
                    <div className="work__title">
                        <h2>
                            Our Work
                        </h2>
                    </div>
                </div>
            </div>
            <div className="work__content">
                <WorkItem
                    img="/img/work/WPT5122_Lotus_A.jpg"
                    description="Westpac - social and digital display campaign"
                    link="/work/westpac-smart-pay"
                />
                <WorkItem
                    img="/img/work/ziwi-01.jpg"
                    description="ZIWI - social and digital display campaign"
                    link="/work/ziwi-peak"
                />

                <WorkItem
                    img="/img/work/enviz-module.jpg"
                    description="ENVIZ - website animation"
                    link="/work/enviz"
                />
                <WorkItem
                    img="/img/work/export-ultra-thebeerforhere.jpg"
                    description="Export Ultra - social and digital display campaign"
                    link="/work/export-ultra"
                />
                <WorkItem
                    img="/img/work/pet_direct_wegetpet.jpg"
                    description="PetDirect - social and digital display campaign"
                    link="/work/pet-direct"
                />
                <WorkItem
                    img="/img/work/southern-cross-gp-01.jpg"
                    description="Southern Cross Insurance - social and digital display campaign"
                    link="/work/southern-cross"
                />


            </div>
        </section >
    );
};

export default Work;


