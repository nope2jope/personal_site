import React from "react";
import { Link } from "react-router-dom";


const Tool = ({handlePagination}) => {
    return <div id="TOOL" class="main-body container">
    <div class="row">
        <div class="col-12 ease-in">
            <h1 class=" ease-in">A FAMILIAR LOOKING TOOL...</h1>
        </div>

        <div class="col-6 lb ease-in">
            <div class="buttons ease-in">
                <div id="works-tool" class="body-nav"><Link to='/works'>1. BRANDISH THE INSTRUMENT</Link></div>
                <div id="about-tool" class="body-nav"><Link to='/about'>2. IDENTIFY ITS MAKE</Link></div>
                <div id="landing-tool" class="body-nav"><a onClick={ handlePagination }>3. RETURN TO THE WELL</a></div>
            </div>
        </div>


            <div className="col-6 rt"><img id="tool" className="col-img" src="trowel_recolor_animated.gif" /></div>
        </div>
    </div>

}

export default Tool;