import React, { useState } from "react";
import axios from "axios";

const Research = props => {
  return (
    <>
      <label for="search-word"> Search By Name</label>
      <br />
      <input
        class="input-type"
        type="text"
        name="search-word"
        onChange={async event => {
          const searchVal = event.target.value;
          console.log(searchVal);

          console.log("searchWord======>" + props.searchedWord);
          const searchedWordResult = await axios.post(
            "http://localhost:3001/searchCharacterByName",
            { searchedWord: searchVal }
          );
          props.setSearchedWord(searchVal);
          console.log("searching.....");
          console.log(searchedWordResult.data);
          props.setFilteredCharacters(searchedWordResult.data.data.results);
        }}
      />
    </>
  );
};

export default Research;
