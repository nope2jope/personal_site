import React from "react";
import Branding from "./Branding";
import MenuButton from "./MenuButton";

function Navbar(props) {
  return (
    <nav>
      <Branding />
      <MenuButton onClick={props.onMenuClick} />
    </nav>
  );
}

export default Navbar;
