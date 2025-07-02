import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIconRounded from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function SmallButton(props) {
  return (
    <button className="small-button" onClick={props.onClick}>
      {props.smallButtonIcon === "edit" && <DeleteOutlineIcon />}
      {props.smallButtonIcon === "clear" && <ClearIcon />}
      {props.smallButtonIcon === "done" && <CheckIcon />}
    </button>
  );
}

export default SmallButton;
