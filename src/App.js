import React, { Component } from "react";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";

class App extends Component {
  render() {
    return (
      <div className="poke">
        <Pokegame />
      </div>
    );
  }
}

export default App;
