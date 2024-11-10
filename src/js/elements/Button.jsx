import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.to}>
            <button className={props.class}>{props.children}</button>
        </Link>
    );
};

export default Button;
