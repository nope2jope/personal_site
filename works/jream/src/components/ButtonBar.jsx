import React from "react";
import BigButton from "./BigButton";
import SmallButton from "./SmallButton";

function ButtonBar(props) {
  return (
    <div className="button-container">
      <BigButton
        bigButtonText={props.bigButtonText}
        bigButtonIcon={props.bigButtonIcon}
        onClick={props.onBigClick}
      />
      <SmallButton
        smallButtonIcon={props.smallButtonIcon}
        onClick={props.onSmallClick}
      />
    </div>
  );
}

export default ButtonBar;
