import React from "react";

function Pokecard({ pokemon }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "1rem 1.5rem",
      }}
      className="Pokecard"
    >
      <div style={{ background: "#eee" }} className="Pokecard__img">
        <img
          src={`https://robohash.org/${pokemon.id}`}
          alt="robot img"
          height="180"
        />
      </div>
      <div
        style={{ padding: "0 1rem", textAlign: "center" }}
        className="Pokecard__body"
      >
        <h4>{pokemon.name}</h4>
        <p>{pokemon.base_experience}</p>
        <p>{pokemon.type}</p>
      </div>
    </div>
  );
}

export default Pokecard;
