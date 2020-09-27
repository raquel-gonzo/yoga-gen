import React from "react";
import "./App.css";
import poses from "./poses.json";
import FilterBy from './components/header'

function App() {
  // array of card suits used as a lookup table.
  // var suits = ["standing", "balance", "seated", "twists"];

  // holds all possible values that a card can have.
  // var poses = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // var standPoses = ["warrior I", "warriorII", "high lunge", "triangle"];
  // var balancePoses = ["balanced table", "tree", "warrior III", "plank"];
  // var seatPoses = ["bound eagle", "hero", "pigeon", "prayer squat"];
  // var twistPoses = ["prayer twist", "supine spinal twist", "thread the needle", "belly twist"];

  // const getDeck = () => {
  //   var deck = [];
  //   for (var i = 0; i < suits.length; i++){
  //     for (var x = 0; x < balancePoses.length; x++){
  //       var card = {value: values[x], suit: suits[i]};
  //       deck.push(card);
  //     }
  //   }
  //   return deck;
  // }

  // const shuffle = (deck) => {
  //   // for 1000 turns, switch the values of two random cards.
  //   for (var i = 0; i < 1000; i++){
  //     var location1 = Math.floor((Math.random() * deck.length));
  // 	  var location2 = Math.floor((Math.random() * deck.length));
  // 	  var tmp = deck[location1];

  // 	  deck[location1] = deck[location2];
  // 	  deck[location2] = tmp;
  //   }
  // }

  const newData = poses.map((pose) => {
    return (
      <div key ={pose.id} className="card">
        <div className="card-image">
          <figure 
            //className="image"
          >
            <img
              style={{width: "100px", height: "auto"}}
              //className="image"
              src={pose.img_url}
              // "https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{pose.english_name}</p>
            </div>
          </div>

          <div className="content">
            Sanskrit name:{pose.sanskrit_name}
          </div>
        </div>
      </div>
    );
  });

  return <div className="App">
    <FilterBy />
    {newData}
  </div>;
}

export default App;
