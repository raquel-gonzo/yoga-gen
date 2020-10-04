import React from "react";

const FilterBy = (props) => {
  const allPoses = props.allPoses.map((pose, index) => {
    return (
      <p key={index}>
        <label htmlFor={pose.type}>{pose.type}</label>
        <input
          className="checkbox"
          type="checkbox"
          id={pose.type}
          onChange={(e) => props.handleCheck(pose, e.target.checked)}
          checked={pose.isChecked}
        />
      </p>
    );
  });

  return (
    <div>
      <div>
        <img id="lotus" src="/images/lotus.svg" alt="lotus clipart" />
        <h2>Yoga Poses Library</h2>
      </div>

      <h3>Filter Poses: </h3>

      <div id="filters">{allPoses}</div>
    </div>
  );
};

export default FilterBy;
