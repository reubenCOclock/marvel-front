import React, { useState, useEffect } from "react";
import axios from "axios";
import "./components.css";

const Character = props => {
  //console.log(typeof props.character.comics.items);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //let comicsCopy = [...comics];
  console.log(props.character);
  const getData = async () => {
    let response = await axios.post(
      "http://localhost:3001/returnComicInfo",
      {
        id: props.character.id
      }
    );
    setComics(response.data.data.results);

    setIsLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading == true) {
    console.log(comics);
    return (
      <>
        {comics.map(function(element) {
          return (
            <div class="comic-box">
              <h4 class="font-bold"> {element.title} </h4>
              <div class="flex-items-character">
                <div class="img-container">
                  <img
                    class="character-img"
                    src={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                  />
                </div>
                <div class="comic-description">
                  <p> {element.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <span> Data Loading</span>;
  }
};

export default Character;
