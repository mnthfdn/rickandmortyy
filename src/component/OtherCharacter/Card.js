import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ characterUrl, location }) {
  let [character, updateCharacterData] = useState([]);

  (async function () {
    let data = await fetch(characterUrl).then((res) => res.json());
    updateCharacterData(data);
  })();

  return (
    <div className="cardContainer">
      <Link
        to={`/CharacterDetail?character=${character.id}&location=${location}`}
      >
        <div className="col-3 detail">
          <div className="imgDiv">
            <img className="img-c other" src={character.image}></img>
          </div>
          <div className="infoDiv">
            <h4
              className="title title-c"
              style={{ fontWeight: "bolder", textDecorationLine: "unset" }}
            >
              {character.name}
            </h4>
            <h4>{character?.origin?.name} </h4>

            {character?.type !== "" ? (
              <h4 style={{ color: "#6b6565" }}> ${character?.type} - </h4>
            ) : (
              ""
            )}
            <h4 style={{ color: "#6b6565" }}>
              {character?.gender === "unknown" ? "" : character?.gender}{" "}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
