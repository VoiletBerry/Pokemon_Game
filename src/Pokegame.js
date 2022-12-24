import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

class Pokegame extends Component {
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randindex = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randindex, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.experience, 0);
    return (
      <div>
        <h1 className="Pokegame-div"> PokeGame !!</h1>
        <Pokedex pokemon={hand1} totalexp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} totalexp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", experience: 62 },
      { id: 7, name: "Squirtle", type: "water", experience: 63 },
      { id: 11, name: "Metapod", type: "bug", experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
      { id: 94, name: "Gengar", type: "poison", experience: 225 },
      { id: 133, name: "Eevee", type: "normal", experience: 65 },
    ],
  };
}

export default Pokegame;
