import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div>
            <nav className="sidebar">
                <ul className="nav">
                    <li className="item" key="home-button">
                        <Link style={{ color: "white" }} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="item">
                        <Link style={{ color: "white" }} to="/create">Create a Crewmate!</Link></li>
                    <li className="item">
                        <Link style={{ color: "white" }} to="/gallery">Crewmate Gallery</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;