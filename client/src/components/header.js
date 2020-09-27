import React from 'react';
import lotus from '../lotus.svg';
// import "./App.css";
// import poses from "./poses.json";

const FilterBy = () => {
    return(
        <div>
            <h2>Yoga Poses Library</h2>


            <p>Filter Poses: </p>

            <p>
            <label htmlFor="standing">Standing</label>
            <input type="checkbox" id="standing" />
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
    )
}

export default FilterBy;