import React from "react";

const FilterBy = (props) => {
  const allPoses = props.allPoses.map((pose, index) => {
    return (
      <p key={index}>
        <label htmlFor={pose.type}>{pose.type}</label>
        <input
          type="checkbox"
          id={pose.type}
          onChange={(e) => props.handleCheck(pose, e.target.checked)}
          checked={pose.isChecked}
        />
      </p>
    )
  })

  return (
    <div>
      <div>
        <h2>Yoga Poses Library</h2>
        <img id="lotus" src="/images/lotus.svg" alt='lotus clipart' />
      </div>

      <p>Filter Poses: </p>

      {allPoses}
    </div>
  );
};

export default FilterBy;
