import React, { useState, useContext } from "react";

function Filter() {
  /* const { status, setStatus} = useContext([]);
   */
  const statusSelect = () => {
    // setStatus({ ...status, status: "" });
    console.log("bişiyler oldu");
  };

  return (
    <>
     
      <div className="filter">
         <h3>Filtered By Status:</h3>
        <div class="top">
          <div class="filterContainer">
            <button id="dead" onClick={(e) => statusSelect()}>
            <div className='circle dead'></div>  Dead
            </button>
            <button id="alive" onClick={(e) => statusSelect()}>
            <div className='circle alive'></div>Alive
            </button>
            <button id="unknown" onClick={(e) => statusSelect()}>
            <div className='circle unknown'></div> Unknown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Filter;
