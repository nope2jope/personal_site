import React from "react";

const Landing = ({handlePagination}) => {

  return <div id="LANDING" className="main-body container ">
    <div className="row ">
      <div className="col-12 ease-in">
        <h1 className="ease-in">YOU APPROACH THE WELL...</h1>
      </div>
      <div className="col-6 lb ease-in">
        <div className="buttons ease-in">
          <div id="rabbit-landing" className="body-nav"><a onClick={handlePagination} className="">1. ATTUNE TO YOUR SURROUNDINGS</a></div>
          <div id="tool-landing" className="body-nav"><a onClick={handlePagination} className="">2. HUNT FOR AN IMPLEMENT</a></div>
          <div id="depths-landing" className="body-nav"><a onClick={handlePagination} className="">3. SCALE THE WELL'S DEPTH</a></div>
        </div>
      </div>

      <div className="col-6 rt"><img id="well" className="col-img" src="well_recolor_animated.gif" /></div>
    </div>
  </div>
}

export default Landing;

