import React from "react";

const TreeBranch = ({ tag, data, onClick }) => {

    if (tag === "development") {
            return <li><a onClick={onClick} id={`branch-${data.id}`} target="_blank" href={data.endpoint}>{data.title}</a></li>

    }
    else if (tag === "writing") {
            return <li><a onClick={onClick} id={data.modal}>{data.title}</a></li>
    }
}

export default TreeBranch;