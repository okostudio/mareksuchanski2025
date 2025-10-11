import { Link } from "react-router-dom";
import PageData from "../PageData";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



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

    const [data, setData] = useState(null)

    useEffect(
        () => {
            if (!data) {
                console.log(PageData)
                setData(PageData)
            }
        },
        [data]
    )
    return (
        <section className="work beige">
            {/* <div className="container center">
                <div>
                    <div className="work__title">
                        <h2>
                            A selection of my work
                        </h2>
                    </div>
                </div>
            </div> */}
            <div className="work__content">

                {(data && data.work) ? data.work.map(item => {
                    return (
                        <WorkItem
                            key={uuidv4()}
                            img={item.mainImage.desktop}
                            description={item.brand + " - " + item.description.short}
                            link={"/work/" + item.url}
                        />
                    )
                })
                    : null
                }

            </div>
        </section >
    );
};

export default Work;


