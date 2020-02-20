import React, { useState, useEffect } from "react";
import axios from "axios";
import Pages from "./Pages";
import "./components.css";
import Research from "./Research";

const Comics = props => {
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(1);
  const [searchedWord, setSearchedWord] = useState("");

  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const getData = async () => {
    let response = await axios.post("http://localhost:3001/getComics", {
      page: page
    });
    setComics(response.data.data.results);
  };

  console.log(comics);
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <h3> My Comic Pages</h3>
      <Research
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        setFilteredCharacters={setFilteredCharacters}
      />
      <div class="flex-character-boxes">
        {comics.map(function(element) {
          return (
            <div class="character-box">
              <h4 class="text-align-center"> {element.title}</h4>{" "}
              <div class="flex-character-items">
                <div class="img-cont">
                  <img
                    class="character-img"
                    src={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                  />
                </div>

                <div class="character-info">
                  <p class="margin-left-10">
                    {element.description != null &&
                    element.description != "" ? (
                      <p>{element.description.substring(0, 100) + "..."} </p>
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="magin-top-pages">
        <Pages setPage={setPage} />
      </div>
    </>
  );
};

export default Comics;
