import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./UpNext.module.css";

function UpNext({ movies, currentIndex }) {
  const [upNextList, setUpNextList] = useState([]);
  useEffect(() => {
    const elems = [];
    for (let i = currentIndex + 1; i < movies.length; ++i)
      elems.push(movies[i]);
    for (let i = 0; i < currentIndex; ++i) elems.push(movies[i]);
    setUpNextList(elems);
  }, [movies, currentIndex]);

  return (
    <div className={styles.upNextContainer}>
      <h2 className={styles.pageHeader}>Up Next</h2>
      {upNextList.map((movie) => (
        <div key={movie.id} className={styles.movieContainer}>
          <img
            className={styles.moviePoster}
            src={movie.poster_img}
            alt='PosterImg'
          />
          <strong className={styles.movieTitle}>{movie.title}</strong>
        </div>
      ))}
    </div>
  );
}

UpNext.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
};

export default UpNext;
