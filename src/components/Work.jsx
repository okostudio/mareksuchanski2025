// import React from "react";
import "./Work.scss"

const WorkItem = (props) => {
    return (
        <div className="work__item">
            <div className="work__item__image">
                <img src={props.img} alt="" />
            </div>
            <div className="work__item__description p3">
                {props.description}
            </div>
        </div>
    )
}

const Work = () => {
    return (
        <section className="work light">
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
                    img="/img/work/geeely-E5-demo-FINAL.jpg"
                    description="Geely - Animated mockup"
                />
                <WorkItem
                    img="/img/work/Rail_Dodgem_15_1920x1080-draftRender.jpg"
                    description="Funlab - Social videos"
                />
                <WorkItem
                    img="/img/work/WSGA_3001879_Hendricks_Summer-Social-BRAND-KeyVisual-PROGRAMATIC-1920x1080-7s.jpg"
                    description="Hendrick's Gin - Social videos"
                />
                <WorkItem
                    img="/img/work/3001421_MTOV_Creatives_green.jpg"
                    description="Victoria State Government - Social videos"
                />
            </div>
        </section >
    );
};

export default Work;


