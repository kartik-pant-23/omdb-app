import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import Gallery from "./components/gallery";

import { movies } from "../../config/constants";

function MainScreen() {
  const [query, setQuery] = useState("");
  const handleQueryChanged = (value) => {
    setQuery((value || "").trim());
  };

  return (
    <div className='main-screen'>
      <SearchBar query={query} onQueryChanged={handleQueryChanged} />
      <Gallery movies={movies} />
    </div>
  );
}

export default MainScreen;
