import { Link } from "react-router-dom";
import { useRef } from "react";

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
                    trigger: workItem.current
                }
            })
                .from(".work__item__image", {
                    x: isEven(props.index) ? "-100%" : "100%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "sine.out",
                    delay: isEven(props.index) ? 0.25 : 0.5,
                })
                .from(".work__item__description", {
                    opacity: 0,
                    duration: 0.25,
                    ease: "sine.out",
                }, 0.25)
                .to(".work__item__description", {
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

export default WorkItem;


