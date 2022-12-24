import React, { Component } from 'react'

const base_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
const test = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"

class Pokecard extends Component {
    render() { 
        let pokemonId = addZero(this.props.id);
        let imgSrc = `${base_url}${pokemonId}.png`;  
            
        console.log("🚀 ~ file: PokeCard.js:20 ~ Pokecard ~ render ~ imgSrc", imgSrc)
        return (
            <div className='pokecard'>
                <h1> {this.props.name} </h1>
                <img style={{ width:"200" , height:"200" }} src={imgSrc} alt="Pokemon Image was supposed to be here"/>
                <div> Type = {this.props.type} </div>
                <div> Experience = {this.props.base_experience} </div>
            </div>
        );
    }

}

function addZero(x) {
    if( x>0 && x<10){
        return x = `00${x}`
    }else if( x>10 && x<100 ){
        return x = `0${x}`
    }else{
        return x;
    }
}
 
export default Pokecard;