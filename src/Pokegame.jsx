import React from "react";
import Pokedex from "./Pokedex";

function Pokegame() {
  const pokemons = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  const handOne = [];
  const handTwo = [...pokemons];
  while (handTwo.length > handOne.length) {
    const idx = Math.floor(Math.random() * handTwo.length);
    const randPok = handTwo.splice(idx, 1)[0];
    handOne.push(randPok);
  }
  const expOne = handOne.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  const expTwo = handTwo.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  return (
    <>
      <h1 style={{ textAlign: "center" }}>PokeGame App</h1>

      <Pokedex
        player={"Player One"}
        isWinner={expOne > expTwo}
        exp={expOne}
        pokemons={handOne}
      />
      <Pokedex
        player={"Player Two"}
        isWinner={expTwo > expOne}
        exp={expTwo}
        pokemons={handTwo}
      />
    </>
  );
}

export default Pokegame;
