import PageData from "../PageData";
import WorkItem from "./WorkItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = (props) => {

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

                {(data && data.work) ? data.work.slice(0, props.displayCount).map((item, index) => {
                    return (
                        <WorkItem
                            index={index}
                            key={uuidv4()}
                            img={item.mainImage.desktop}
                            brand={item.brand}
                            description={item.description.short}
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


