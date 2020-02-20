import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Pages from "./Pages";
import "./components.css";
import axios from "axios";
import Research from "./Research";
const Characters = props => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedWord, setSearchedWord] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  //const [character, setCharacter] = useState([]);
  //console.log(props.characters);
  //console.log("page====>" + page);
  const history = useHistory();

  console.log(filteredCharacters.length);

  const getData = async () => {
    const APIcharacters = await axios.post("http://localhost:3001/characters", {
      page: page
    });
    setCharacters(APIcharacters.data);
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  }, [page]);
  //console.log(characters);
  //console.log(history);

  const { name } = useParams();
  if (isLoading === true) {
    return (
      <>
        <h2 class="text-align-center"> Les Personnages</h2>
        <Research
          searchedWord={searchedWord}
          setSearchedWord={setSearchedWord}
          setFilteredCharacters={setFilteredCharacters}
        />

        <div class="flex-character-boxes">
          {filteredCharacters.length == 0
            ? characters.map(function(element) {
                return (
                  <div
                    class="character-box"
                    onClick={() => {
                      props.setCharacter(element);

                      history.push("/character/" + element.name);
                    }}
                  >
                    <h4 class="text-align-center"> {element.name}</h4>{" "}
                    <div class="flex-character-items">
                      <div class="img-cont">
                        <img
                          class="character-img"
                          src={
                            element.thumbnail.path +
                            "." +
                            element.thumbnail.extension
                          }
                        />
                      </div>

                      <div class="character-info">
                        <p class="margin-left-10">
                          {element.description != "" ? (
                            <p>
                              {element.description.substring(0, 100) + "..."}{" "}
                            </p>
                          ) : (
                            <span></span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : filteredCharacters.map(function(element) {
                return (
                  <div
                    class="character-box"
                    onClick={() => {
                      props.setCharacter(element);

                      history.push("/character/" + element.name);
                    }}
                  >
                    <h4 class="text-align-center"> {element.name}</h4>{" "}
                    <div class="flex-character-items">
                      <div class="img-cont">
                        <img
                          class="character-img"
                          src={
                            element.thumbnail.path +
                            "." +
                            element.thumbnail.extension
                          }
                        />
                      </div>

                      <div class="character-info">
                        <p class="margin-left-10">
                          {element.description != "" ? (
                            <p>
                              {element.description.substring(0, 100) + "..."}{" "}
                            </p>
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

        <div class="margin-top-pages">
          <Pages setPage={setPage} />
        </div>
      </>
    );
  } else {
    return <h4> Data Loading</h4>;
  }
};

export default Characters;
