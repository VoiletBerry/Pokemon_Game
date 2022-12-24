import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h6 className="Pokedex-winner">WINING HAND</h6>;
    } else {
      title = <h6 className="Pokedex-loser">LOSING HAND</h6>;
    }
    return (
      <div className="Pokedex">
        <h1>{title}</h1>
        <h4>Total Experience = {this.props.totalexp}</h4>
        <div className="Pokedex-card">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
