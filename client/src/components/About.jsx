import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
    
    return <div>
        <NavBar />
        <div className="border row">
            <div id="ABOUT" className="main-body container">
                <div className="row ">
                    <div className="col-12 ease-in">
                        <h1 className="ease-in">YOUR BREATHING STEADIES...</h1>
                    </div>

                    <div className="col-6 lb ease-in">
                        <div className="buttons ease-in">
                            <p>Hi! My name is Joseph Kisbye and I'm a freelance web developer living in Philadelphia,
                                Pennsylvania.
                            </p>
                            <p>I hold degrees in Writing and Information Technology, as well as various other technical
                                certifications.</p>
                            <p>You can view a collection of my works <Link className="out-nav" to="/works">here</Link>.</p>
                        </div>
                    </div>


                    <div className="col-6 rt"><img id="mug" className="col-img" src="mug_recolor_animated_ring.gif" /></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

}

export default About;