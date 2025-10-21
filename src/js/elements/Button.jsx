import { Link } from "react-router-dom";

const Button = (props) => {

    const isExternal = props.to.indexOf("http") > -1

    return (
        <>
            {
                isExternal ?
                    <a href={props.to} target="_blank">
                        <button className={props.class}>{props.children}</button>
                    </a>
                    :
                    <Link to={props.to}>
                        <button className={props.class}>{props.children}</button>
                    </Link>
            }
        </>
    );
};

export default Button;
