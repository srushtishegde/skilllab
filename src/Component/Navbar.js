import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-warning  navbar-dark mt-1">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <h1 className="text-danger"><img src="https://th.bing.com/th/id/OIP.zsYd5p5bW_RXuZh66GZFEwAAAA?pid=ImgDet&rs=1" alt=" " className="log2" height="25px"></img>
                            Foodies</h1>
                    </Link>
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/myrecipe">
                                    MyRecipe
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/aboutus">
                                    AboutUs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;