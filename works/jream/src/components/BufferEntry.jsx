import React from "react";

function BufferEntry(props) {
  return (
    <div
      className={
        props.type === "top" ? "buffer-entry-top" : "buffer-entry-bottom"
      }
    ></div>
  );
}

export default BufferEntry;
