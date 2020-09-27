import React from "react";
import "./App.css";

function App() {
  // array of card suits used as a lookup table.
  var suits = ["standing", "balance", "seated", "twists"];

  // holds all possible values that a card can have.
  // var poses = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  var standPoses = ["warrior I", "warriorII", "high lunge", "triangle"];
  var balancePoses = ["balanced table", "tree", "warrior III", "plank"];
  var seatPoses = ["bound eagle", "hero", "pigeon", "prayer squat"];
  var twistPoses = ["prayer twist", "supine spinal twist", "thread the needle", "belly twist"];

  const getDeck = () => {
    var deck = new Array();
    for (var i = 0; i < suits.length; i++){
      for (var x = 0; x < balancePoses.length; x++){
        var card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
      }
    }
    return deck;
  }

  const shuffle = (deck) => {
    // for 1000 turns, switch the values of two random cards.
    for (var i = 0; i < 1000; i++){
      var location1 = Math.floor((Math.random() * deck.length));
		  var location2 = Math.floor((Math.random() * deck.length));
		  var tmp = deck[location1];

		  deck[location1] = deck[location2];
		  deck[location2] = tmp;
    }
  }







  return <div className="App"></div>;
}

export default App;
