import React from "react";
import { useState } from "react";
import Landing from "./Landing";
import Rabbit from "./Rabbit";
import Depths from "./Depths";
import Tool from "./Tool";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Labyrinth = () => {

    const [viewsVis, setViewsVis] = useState({
        landing: true,
        depths: false,
        rabbit: false,
        tool: false,
    });

    const [lightsOn, setLightsOn] = useState(true);

    const Descend = () => {
        setLightsOn(!lightsOn);
        document.body.style.overflow = "hidden";
    }

    const Ascend = () => {
        setLightsOn(!lightsOn);
        document.body.style.overflow = "auto";
    }

    const handlePagination = (event) => {
        const toID = event.target.parentElement.id.split("-")[0].toLowerCase();
        const fromID = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id.toLowerCase();
        setViewsVis(prevVis => ({
            ...prevVis,
            [fromID]: false,
            [toID]: true,
        }));
        if (toID === "depths") {
            Descend();
        }
        if (fromID === "depths") {
            Ascend();
        }
        window.scrollTo(0, 0);
    }

    return <div>
        {lightsOn ?
            <div>
                <NavBar />
                <div className="border row">
                    {viewsVis.landing && <Landing handlePagination={handlePagination} />}
                    {viewsVis.rabbit && <Rabbit handlePagination={handlePagination} />}
                    {viewsVis.tool && <Tool handlePagination={handlePagination} />}
                    {viewsVis.depths && <Depths handlePagination={handlePagination} />}
                </div>
                <Footer /></div>
            :
            <div>
                <NavBar />
                <div className="border dark row">
                    {viewsVis.landing && <Landing handlePagination={handlePagination} />}
                    {viewsVis.rabbit && <Rabbit handlePagination={handlePagination} />}
                    {viewsVis.tool && <Tool handlePagination={handlePagination} />}
                    {viewsVis.depths && <Depths handlePagination={handlePagination} />}
                </div>
            </div>}
    </div>

}

export default Labyrinth;

// className={!lightsOn ? "dark" : "none"}>