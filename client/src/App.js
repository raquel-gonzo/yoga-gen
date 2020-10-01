import React, { useState } from "react";
import "./App.css";
import poses from "./poses.json";
import FilterBy from "./components/FilterBy";

const allPoses = [
  {
    type: "Standing",
    isChecked: true,
  },
  {
    type: "Balanced",
    isChecked: true,
  },
  {
    type: "Seated",
    isChecked: true,
  },
  {
    type: "Twists",
    isChecked: true,
  },
];

function App() {
  const [selectedTypes, setSelectedTypes] = useState(["Standing", "Balanced", "Seated", "Twists"]);
  
  // [standing, balanced, seated, twists]

  // filteredPoses -> all poses if nothing is checked

  const handleCheck = (checkedPose, isChecked) => {
    // if checked, add to selectedTypes
    checkedPose.isChecked = isChecked;
    if (checkedPose.isChecked) {
      setSelectedTypes([...selectedTypes, checkedPose.type]);
    } else {
      // selectedTypes -> ["standing", "balanced"]
      // if we uncheck a box, we want to filter out that pose
      setSelectedTypes(selectedTypes.filter((pose) => pose !== checkedPose.type));
    }
  };

  const filteredPoses = poses.filter((pose) => {
    //checking all data in poses.json
    // if standing pose checked, return those
    for (let i = 0; i < selectedTypes.length; i++) {
      if (pose.types.includes(selectedTypes[i])) {
        // return true to be included in filteredPoses array
        return true;
      }
    }
    //if the pose from poses.json array does not include the selected pose type.
    return false;
  });

  const newData = filteredPoses.map((pose) => {
    return (
      <div className="card" key={pose.id}>
        <div className="poses">
          <img src={pose.img_url} alt={pose.english_name + " pose"} />
        </div>

        <div>
          <div>
            <p className="title is-4">{pose.english_name}</p>
          </div>

          <div>Sanskrit name:{pose.sanskrit_name}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <FilterBy handleCheck={handleCheck} allPoses={allPoses} />
      {newData}
    </div>
  );
}

export default App;
