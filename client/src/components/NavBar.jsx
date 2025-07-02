import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return <nav>
        <div className="container">
            <div className="row">
                <div id="navbar">
                    <div className=""><a id="name-link" href="/" className="nav-name">JOSEPH KISBYE</a>
                    </div>
                    <div className="">
                        <a id="home-link" className="navbar-links" href="/">HOME</a>
                        <Link id="about-link" className="navbar-links" to="/about">ABOUT</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;