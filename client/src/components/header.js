import React, { useState } from "react";

const FilterBy = (props) => {

  return (
    <div>
      <div>
        <h2>Yoga Poses Library</h2>
        <img id="lotus" src="/images/lotus.svg" />
      </div>

      <p>Filter Poses: </p>

      <p>
        <label htmlFor="standing">Standing</label>
        <input type="checkbox" id="standing" onChange={(e) => props.handleCheck("standing", e.target.checked)}/>
      </p>

      <p>
        <label htmlFor="standing">Balanced</label>
        <input type="checkbox" id="balanced" />
      </p>

      <p>
        <label htmlFor="standing">Seated</label>
        <input type="checkbox" id="seated" />
      </p>

      <p>
        <label htmlFor="standing">Twists</label>
        <input type="checkbox" id="twists" />
      </p>
    </div>
  );
};

export default FilterBy;
