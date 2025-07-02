import React from "react";
import MenuExtension from "./MenuExtension";

function MenuWindow(props) {
  const [extension, setExtension] = React.useState(false);

  function toggleExtension() {
    setExtension(!extension);
  }

  return (
    <div>
      <div className="overlay"></div>
      <div className="menu-window">
        <div className="menu-options">
          <button>settings</button>
          <button onClick={toggleExtension}>about</button>
          <button onClick={props.onExitClick}>close</button>
        </div>
      </div>
      {extension && <MenuExtension toggle={toggleExtension} />}
    </div>
  );
}

export default MenuWindow;
