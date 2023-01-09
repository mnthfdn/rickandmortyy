import React, { useState } from "react";
import { Link } from "react-router-dom";

function CharacterCards({ item, location }) {
  let [itemData, updateItemData] = useState([]);

  (async function () {
    let data = await fetch(item).then((res) => res.json());
    updateItemData(data);
  })();

  var life = itemData?.status === "Dead" ? "circle dead" : "circle alive";
  return (
    <>
      <Link  to={`/CharacterDetail?character=${itemData.id}&location=${location}`} >
        <div className="col-3">
          <img className="img-c" src={itemData.image}></img>
          <div className="title title-c" style={{ fontWeight: "bolder" }}>
            {itemData.name}
          </div>
          <div className={life}></div>

          <h4>{itemData?.status}</h4>
          <h4>- {itemData?.species} </h4>
        </div>
      </Link>
    </>
  );
}
export default CharacterCards;
