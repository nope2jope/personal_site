import React from "react";
import ButtonBar from "./ButtonBar";

function ComposeWindow(props) {
  const [textEntry, setTextEntry] = React.useState("");

  function handleTextEntry(e) {
    const newText = e.target.value;
    setTextEntry(newText);
  }

  function discardTextEntry() {
    if (textEntry === "") {
      props.toggleScreen();
    } else {
      setTextEntry("");
    }
  }

  return (
    <div className={props.status}>
      <div className={`compose-window transition-wrapper ${props.status}`}>
        <textarea
          value={textEntry}
          onChange={handleTextEntry}
          placeholder="Commit your dream to memory..."
        ></textarea>
      </div>
      <ButtonBar
        bigButtonText="COMMIT"
        bigButtonIcon="post"
        onBigClick={() => {
          props.addData(textEntry);
          setTextEntry("");
          props.toggleScreen();
        }}
        smallButtonIcon="clear"
        onSmallClick={discardTextEntry}
      />
    </div>
  );
}

export default ComposeWindow;
