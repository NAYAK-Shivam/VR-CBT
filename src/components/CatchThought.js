import React, { useState } from "react";
import "aframe";

const CatchThought = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  // Sample scenario and feelings
  const scenario =
    "You've just completed a difficult exam. How are you feeling?";
  const feelings = [
    { name: "Relieved", color: "green", position: "-2 -0.5 -3" },
    { name: "Worried", color: "red", position: "0 -0.5 -3" },
    { name: "Confident", color: "blue", position: "2 -0.5 -3" },
  ];

  const handleClick = (feeling) => {
    setSelectedFeeling(feeling);
  };

  return (
    <div>
      <h2>{scenario}</h2>
      <div style={{ width: "100%", height: "100%" }}>
        <a-scene background="color: pink">
          {" "}
          {/* Set background color */}
          <a-entity camera look-controls wasd-controls>
            <a-entity camera look-controls>
              <a-cursor
                color="black"
                fuse="true"
                fuse-timeout="1000"
                raycaster="objects: .clickable"
              ></a-cursor>
            </a-entity>
          </a-entity>
          {feelings.map((feeling, index) => (
            <a-sphere
              key={index}
              className="clickable"
              color={feeling.color}
              radius="0.5"
              position={feeling.position}
              events={{ click: () => handleClick(feeling.name) }}
            >
              {/* Display feeling name inside the sphere */}
              <a-text
                value={feeling.name}
                align="center"
                position="0 -1 0"
                color="black"
                scale="1 1 1"
              />
            </a-sphere>
          ))}
          <a-entity
            position="0 1 -3"
            geometry="primitive: plane; width: 4; height: 1"
            material="color: aliceblue"
            text={`value: ${
              selectedFeeling
                ? `You selected: ${selectedFeeling}`
                : "You've just completed a difficult exam. How are you feeling?"
            }; color: purple;`}
          ></a-entity>
        </a-scene>
      </div>
    </div>
  );
};

export default CatchThought;
