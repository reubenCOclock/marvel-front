import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div> Welcome to my home page</div>
      <Link to="/characters"> View Characters</Link>{" "}
      <Link to="/comics"> View Comics</Link>
    </>
  );
};

export default Header;
