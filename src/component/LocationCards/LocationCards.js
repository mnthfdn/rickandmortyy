import React from "react";
import { Link } from "react-router-dom";

function LocationCards({ results }) {
  if (results) {
    return results.map((item, key) => {
      return (
        <>
          <Link to={`/CharacterPage?location=${item.id}`}>
            <div className="col-4 bg" key={key}>
              <div
                className="title"
                style={{ fontWeight: "bolder", marginBottom: "15px" }}
              >
                {item.name}
              </div>
              <div style={{ display: "flex", fontSize: "13px" }}>
                <div
                  className="info"
                  style={{
                    alignItems: "flex-start",
                    marginRight: "10px",
                  }}
                >
                  <span>Type</span>
                  <span>Dimension</span>
                  <span>Resident Count </span>
                </div>
                <div className="info">
                  <span>: {item.type}</span>
                  <span>
                    : {item.dimension === "unknown" ? "-" : item.dimension}
                  </span>
                  <span>
                    :{" "}
                    {item.residents.length === 0 ? "-" : item.residents.length}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </>
      );
    });
  } else {
    return <div> Sonuç Dönmedi</div>;
  }
}
export default LocationCards;
