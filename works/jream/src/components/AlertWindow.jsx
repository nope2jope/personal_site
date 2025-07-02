import React from "react";

function AlertWindow(props) {
  return (
    <div className="alert-window">
      <p className="alert-headline">
        {props.status === "commit" ? "Commit Changes?" : "Discard Changes?"}
      </p>
      <div className="alert-options">
        <button onClick={props.clickYes}>Yes</button>
        <button onClick={props.clickNo}>No</button>
      </div>
    </div>
  );
}

export default AlertWindow;
