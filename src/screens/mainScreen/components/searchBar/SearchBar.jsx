import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

/**
 * This is the Search Bar which has a input node that contains the search query depending
 * on which the list of movies/shows etc can be shown on the screen.
 *
 * @param query Search query depending on which the list of movies is shown
 * @param onQueryChanged Callback function that is triggered by onChange of input container
 */
function SearchBar({ query, onQueryChanged }) {
  const onInputChange = (e) => {
    onQueryChanged(e.target.value);
  };

  const typeOptions = [
    { value: "all", label: "All" },
    { value: "movies", label: "Movies" },
    { value: "series", label: "Series" },
  ];

  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.brand}>
          <a href='https://imdb.com' target='_blank' rel='noreferrer'>
            OMDb
          </a>
        </div>

        <div className={styles.searchBox}>
          <select
            name='types'
            id='types'
            className={styles.typesSelect}
            defaultValue='all'
          >
            {typeOptions.map((data, index) => (
              <option key={index} value={`${data.value}`}>
                {data.label}
              </option>
            ))}
          </select>
          <input
            className={styles.searchBox}
            type='text'
            value={query}
            onChange={onInputChange}
            placeholder='Search OMDb'
          />
        </div>
      </div>
    </nav>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onQueryChanged: PropTypes.func,
};

export default SearchBar;
