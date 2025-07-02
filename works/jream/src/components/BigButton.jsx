import React from "react";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function BigButton(props) {
  return (
    <button type="submit" className="big-button" onClick={props.onClick}>
      {props.bigButtonText}
      <span className="big-button-icon">
        {props.bigButtonIcon === "write" && <CreateOutlinedIcon />}
        {props.bigButtonIcon === "post" && <BedtimeOutlinedIcon />}
      </span>
    </button>
  );
}

export default BigButton;
