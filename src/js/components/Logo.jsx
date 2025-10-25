import { Link } from "react-router-dom";
import { LogoBadge } from "../elements/Svgs";

const Logo = () => {
    return (
        <div className="nav-logo">
            <Link to={"/"}>
                <LogoBadge />
            </Link>
        </div>
    );
};

export default Logo;