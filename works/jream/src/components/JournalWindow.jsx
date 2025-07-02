import React, { useState, useEffect, useRef } from "react";
import BufferEntry from "./BufferEntry";
import ButtonBar from "./ButtonBar";
import Entry from "./Entry";

function JournalWindow(props) {
  const containerRef = useRef(null); // Ref for the scrolling container
  const [opacities, setOpacities] = useState(0); // State to hold opacity of each item
  const [editVis, setEditVis] = useState(false);

  const updateOpacities = () => {
    const updatedOpacities = {};

    const container = containerRef.current;
    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.clientHeight;

    // Iterate over each entry inside the container and calculate opacity based on position
    const entries = container.children; // All child elements of the scrolling container

    Array.from(entries).forEach((entry, index) => {
      const rect = entry.getBoundingClientRect();
      const elementTop = rect.top;

      // Calculate distance from the center of the scrolling container
      const elementCenter = elementTop + rect.height + 250 / 2;
      const containerCenter = containerTop + containerHeight / 2;

      // Calculate the distance between the element's center and the container's center
      const distanceFromCenter = Math.abs(elementCenter - containerCenter);

      // Calculate opacity: closer to the center = higher opacity
      const maxDistance = containerHeight / 2; // Max distance an element can be from the center
      const opacity = Math.max(1 - distanceFromCenter / maxDistance, 0);

      updatedOpacities[index] = opacity;
    });

    setOpacities(updatedOpacities);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateOpacities();
    };

    const container = containerRef.current;

    container.addEventListener("scroll", handleScroll);
    updateOpacities();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleEdit() {
    setEditVis(!editVis);
  }

  function generateEntry(entry, i) {
    return (
      <Entry
        key={entry.id}
        id={entry.id}
        opacity={opacities[i] ?? 0}
        body={entry.body}
        timeStamp={entry.timeStamp}
        editable={editVis}
        deleteEntry={props.deleteData}
      />
    );
  }

  return (
    <div className={props.status}>
      <div
        className={`journal-container transition-wrapper ${props.status}`}
        ref={containerRef}
      >
        <BufferEntry type="top" />
        {props.data.map(generateEntry)}
        <BufferEntry type="bottom" />
      </div>
      <ButtonBar
        bigButtonText="JOURNAL"
        bigButtonIcon="write"
        onBigClick={props.toggleScreen}
        smallButtonIcon={editVis ? "done" : "edit"}
        onSmallClick={toggleEdit}
      />
    </div>
  );
}

export default JournalWindow;
