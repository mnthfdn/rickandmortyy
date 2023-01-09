import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import headerLogo from "./images.png";
import LocationPages from "./pages/LocationPages";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updatefetchedData] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/location?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updatefetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Link to={`/`}>
        <img className="logo" src={headerLogo}></img>
      </Link>
      <link
        href="https://fonts.google.com/specimen/Poppins"
        rel="stylesheet"
      ></link>
      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/"
              element={
                <LocationPages
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  info={info}
                  results={results}
                />
              }
            />
            <Route path="/CharacterPage" element={<CharacterPage />} />
            <Route path="/CharacterDetail" element={<CharacterDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
