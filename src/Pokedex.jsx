import React from "react";
import Pokecard from "./Pokecard";

function Pokedex({ pokemons, player, exp, isWinner }) {
  return (
    <>
      <div
        style={
          isWinner
            ? {
                textAlign: "center",
                padding: "0.1rem 0",
                background: "green",
                color: "white",
              }
            : {
                textAlign: "center",
                padding: "0.1rem 0",
                background: "red",
                color: "white",
              }
        }
      >
        <h3>{isWinner ? "Winner" : "Loser"}</h3>
        <p>
          {player} - Experience : {exp}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "0 2rem",
        }}
        className="Pokedex"
      >
        {pokemons.map((pokemon) => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default Pokedex;
