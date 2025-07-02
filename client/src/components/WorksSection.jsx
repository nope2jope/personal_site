import React from "react";
import TreeBranch from "./TreeBranch";
import { writingData, devData } from "../scripts/works-data";

const WorksSection = ({ tag, onClick }) => {

    return (
        <div>
            <img className="works-banner" src="sunrow.png" alt="" />
            <details className="works-details">
                <summary>
                    <h3 className="works-headline">{tag.toUpperCase()}</h3>
                </summary>
                <ul className="tree">
                    {tag === "writing" && writingData.map(item => (
                        <TreeBranch key={`b${item.id}`} tag={tag} data={item} onClick={onClick} />
                    ))}
                    {tag === "development" && devData.map(item => (
                        <TreeBranch key={`b${item.id}`} tag={tag} data={item} onClick={onClick} />
                    ))}
                </ul>
            </details>
            <img className="works-banner" src="sunrow_flip.png" alt="" />

        </div>)
}

export default WorksSection;