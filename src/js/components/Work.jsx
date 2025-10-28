import { Link } from "react-router-dom";
import PageData from "../PageData";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const isEven = (number) => {
    return (number % 2 === 0)
}

const WorkItem = (props) => {
    const workItem = useRef()



    useGSAP(() => {
        gsap.context(() => {

            new gsap.timeline({
                scrollTrigger: {
                    trigger: workItem.current,
                    scrub: 1,
                    // markers: true
                }
            })
                .from(".work__item__image", {
                    x: isEven(props.index) ? "-100%" : "100%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "sine.out",
                })
                .from(".work__item__description", {
                    opacity: 0,
                    duration: 0.25,
                    ease: "sine.out",
                }, 0.25)
                .from(".work__item__description", {
                    opacity: 1,
                    duration: 0.5,
                    ease: "sine.out",
                })

        }, [workItem])
    }, [workItem])

    return (
        <div className="work__item" ref={workItem}>
            <Link to={props.link}>
                <div className="overflow-hidden">
                    <div className="work__item__image">
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="work__item__description p3">
                    <strong>{props.brand}</strong>  {" - " + props.description}
                </div>
            </Link>
        </div>
    )
}

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


