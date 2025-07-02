import React from "react";
import { Link } from "react-router-dom";

const Rabbit = ({handlePagination}) => {
    return <div id="RABBIT" className="main-body container">
        <div className="row">
            <div className="col-12 ease-in">
                <h1 className="ease-in">THE SUDDEN RUSH OF MOVEMENT...</h1>
            </div>

            <div className="col-6 lb ease-in">
                <div className="buttons ease-in">
                    <div id="tool-rabbit" className="body-nav"><a onClick={handlePagination}>1. ACHE FOR THE METROPOLIS</a></div>
                    <div id="about-rabbit" className="body-nav"><Link to="/about">2. STEAL A MOMENT'S REST</Link></div>
                    <div id="landing-rabbit" className="body-nav"><a onClick={handlePagination} >3. RETURN TO THE WELL</a></div>
                </div>
            </div>


            <div className="col-6 rt"><img id="rabbit" className="col-img" src="rabbit_recolor_animated.gif" /></div>
        </div>
    </div>
}

export default Rabbit;