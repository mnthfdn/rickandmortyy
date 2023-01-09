import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtherCharacter from "../component/OtherCharacter/OtherCharacter";

function CharacterDetail() {
  let [itemData, updateItemData] = useState([]);
  const id = document.location.search.split("character=")[1].split("&")[0];
  const location = document.location.search.split("location=")[1].split("&")[0];
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateItemData(data);
  })();

  var life = itemData?.status === "Dead" ? "circle dead" : "circle alive";
  return (
    <div className="detailPage">
      <div className="leftSide">
        <div>
          <Link to={`/CharacterDetail?${itemData?.id}`}>
            <div className="col-3 col3">
              <img className="img-c" src={itemData?.image}></img>
              <div className="title title-c" style={{ fontWeight: "bolder" }}>
                {itemData?.name}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div className={life}></div>
                  <h4>{itemData?.status}</h4>
                  <h4> - {itemData?.species} </h4>
                </div>
                <div>
                  <h4 style={{ fontSize: "11px" }}>{itemData?.type}</h4>
                  <h4 style={{ fontSize: "11px" }}> - {itemData?.gender} </h4>
                </div>
              </div>

              <div>{itemData?.origin?.name}</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="rigthSide">
        <h3>Other Characters</h3>
        <div>
          <OtherCharacter
            location={location}
          ></OtherCharacter>
        </div>
      </div>
    </div>
  );
}
export default CharacterDetail;
