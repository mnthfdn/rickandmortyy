import React, { useState, useEffect } from "react";
import Card from "./Card";

function OtherCharacter({ location }) {
  const [otherCharacterData, setOtherCharacterData] = useState([]);
  const cApi = `https://rickandmortyapi.com/api/location/${location}`;

  useEffect(() => {
    (async function () {
      let resp = await fetch(cApi).then((res) => res.json());
      setOtherCharacterData(resp);
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "450px",
        overflow: "auto",
        overflowY: "scroll",
      }}
    >
      {otherCharacterData?.residents?.map((character, key) => (
        <Card characterUrl={character} location={location}></Card>
      ))}
    </div>
  );
}
export default OtherCharacter;
