import React, { useState, useEffect } from "react";
import CharacterCards from "../component/CharacterCards/CharacterCards";
import Filter from "../component/Filter/Filter";

function CharacterPages() {
  const [characterData, setCharacterData] = useState([]);
  const cId = document.location.search.split("location=")[1];
  const cApi = `https://rickandmortyapi.com/api/location/${cId}`;
  useEffect(() => {
    (async function () {
      let response = await fetch(cApi).then((res) => res.json());
      setCharacterData(response);
    })();
  }, [cApi]);

  return (
    <div>
    <Filter></Filter>
      {characterData?.residents?.map((user, key) => (
        <CharacterCards key={key} item={user} location={cId} />
      ))}
    </div>
  );
}

export default CharacterPages;
