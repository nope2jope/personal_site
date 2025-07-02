import React from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function MenuExtension(props) {
  const [mute, setMute] = React.useState(false);

  return (
    <div className="menu-extension">
      <div className="extension-options">
        <button onClick={() => setMute(!mute)}>mute</button>
        <button>include title</button>
        <button>theme: hazy</button>
        <button onClick={props.toggle}>close</button>
      </div>
    </div>
  );
}
