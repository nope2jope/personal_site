import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function MenuButton(props) {
  return (
    <button onClick={props.onClick} className="menu-button">
      <MenuIcon />
    </button>
  );
}

export default MenuButton;
