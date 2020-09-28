import React, {useState} from "react";
import "./App.css";
import poses from "./poses.json";
import FilterBy from "./components/header";

function App() {
  const [filteredTypes, setFilteredTypes] = useState([]);
  
  // [standing, balanced, seated, twists]

  // filteredPoses -> all poses if nothing is checked

  const handleCheck = (poseType, isChecked) => {
    console.log(poseType);
    // if checked, add to filteredTypes
    if (isChecked) {
      setFilteredTypes([...filteredTypes, poseType]);
    } else {
      // if we uncheck a box, we want to filter out that pose
      setFilteredTypes(filteredTypes.filter(pose => pose.type !== poseType));
    }
  };
  
  const filteredPoses = poses.filter(pose => {
    // if standing pose checked, return those 
    // if [].contains(pose.type)
    return pose;
  });


  const newData = filteredPoses.map((pose) => {
    return (
      <div className="card" key={pose.id}>
        <div className="poses">
          <img src={pose.img_url} alt="Placeholder image"/>
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
      <FilterBy handleCheck={handleCheck} />
      {newData}
    </div>
  );
}

export default App;
