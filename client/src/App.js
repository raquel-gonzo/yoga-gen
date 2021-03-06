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
  const [selectedTypes, setSelectedTypes] = useState([
    "Standing",
    "Balanced",
    "Seated",
    "Twists",
  ]);

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
      setSelectedTypes(
        selectedTypes.filter((pose) => pose !== checkedPose.type)
      );
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

  const alphaPoses = filteredPoses.sort(function (a, b) {
    if (a.english_name < b.english_name) {
      return -1;
    }
    if (a.english_name > b.english_name) {
      return 1;
    }
    return 0;
  });

  const message = () => {
    if (newData.length === 0){
      return(<div id='message'>select a pose category.</div>)
    }
  }

  const newData = alphaPoses.map((pose) => {
    return (
      <div className="card bg-light mb-3 border-dark">
        <div className="card-body" key={pose.id}>
          <div className="poses">
            <img src={pose.img_url} alt={pose.english_name + " pose"} />
          </div>

          <div>
            <div>
              <p className="card-title">{pose.english_name}</p>
            </div>

            <div className="card-text">Sanskrit name: {pose.sanskrit_name}</div>

            <div className="card-text">
              Pose type(s):{" "}
              {pose.types.map((type, index) => {
                // if (index !== pose.types.length - 1) {
                //   return type + ", ";
                // } else {
                //   return type;
                // }
                return index !== pose.types.length - 1 ? type + ", " : type;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <FilterBy handleCheck={handleCheck} allPoses={allPoses} />
      <div id="allPosesContainer">
        {newData}
        {message()}
      </div>
    </div>
  );
}

export default App;
