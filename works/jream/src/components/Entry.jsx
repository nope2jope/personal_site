import React, { useState } from "react";
import RemoveIconRounded from "@mui/icons-material/Remove";

const Entry = React.forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false);

  function expandEntry() {
    setExpanded(!expanded);
  }

  function editEntry() {
    console.log(`edit entry ${props.id}`);
  }

  function generateTitle(body) {
    return body.split(" ").slice(0, 4).join(" ");
  }

  function generatePreview(body) {
    if (body.length > 120) {
      const preview = body.split(" ").slice(0, 27).join(" ");
      return preview + "...";
    } else {
      return body;
    }
  }

  return (
    <div
      onClick={expandEntry}
      key={ref}
      id={props.id}
      style={{ opacity: props.opacity }}
      className="entry"
    >
      <h4 className="entry-title">{generateTitle(props.body)}...</h4>
      {expanded ? (
        <p className="entry-text">{props.body}</p>
      ) : (
        <p className="entry-text">{generatePreview(props.body)}</p>
      )}
      <p className="time-stamp">{props.timeStamp}</p>
      {props.editable && (
        <RemoveIconRounded
          className="entry-button"
          onClick={() => {
            props.deleteEntry(props.id);
          }}
        />
      )}
    </div>
  );
});

export default Entry;
