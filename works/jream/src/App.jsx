import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MenuWindow from "./components/MenuWindow";
import JournalWindow from "./components/JournalWindow";
import ComposeWindow from "./components/ComposeWindow";
import data from "./data";
import './styles/App.css';


export default function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [menuExtension, setMenuExtension] = React.useState(false);
  const [altScreen, setAltScreen] = useState(false);
  const [journalEntries, setJournalEntries] = useState(
    data.sort((a, b) => b.id - a.id)
  );

  function addJournalEntry(entry) {
    const date = new Date();
    const timeString = date.toLocaleString();
    const timeID = date.getTime();
    const newEntry = {
      id: timeID,
      body: entry,
      timeStamp: timeString,
    };

    setJournalEntries((prevEntries) => {
      const updatedEntries = [...prevEntries, newEntry];
      updatedEntries.sort((a, b) => b.id - a.id);
      return updatedEntries;
    });
  }

  function deleteJournalEntry(id) {
    setJournalEntries((prevEntries) => {
      return prevEntries.filter((entry, i) => {
        return entry.id !== id;
      });
    });
  }

  function toggleScreen() {
    setAltScreen(!altScreen);
  }

  function toggleMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  return (
    <div className="App">
      <Navbar onMenuClick={toggleMenu} />
      {menuIsVisible && <MenuWindow onExitClick={toggleMenu} />}
      <JournalWindow
        data={journalEntries}
        deleteData={deleteJournalEntry}
        toggleScreen={toggleScreen}
        status={altScreen ? "fade-out move-back" : "fade-in move-forward"}
      />
      <ComposeWindow
        toggleScreen={toggleScreen}
        addData={addJournalEntry}
        status={altScreen ? "fade-in" : "fade-out"}
      />
    </div>
  );
}
