import React from "react";

const Pages = props => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div class="container margin-top flex-pages-center">
      {pages.map(function(element) {
        return (
          <button
            onClick={() => {
              props.setPage(element);
              props.setIsLoading(false);
            }}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
};

export default Pages;
