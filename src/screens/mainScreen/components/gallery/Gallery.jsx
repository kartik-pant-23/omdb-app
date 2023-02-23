import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Gallery.module.css";

function Gallery({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryImagesRef = useRef();

  const handleShowPrevious = () => {
    setCurrentIndex((prev) => {
      const index = (prev - 1 + movies.length) % movies.length;
      return index;
    });
  };

  const handleShowNext = () => {
    setCurrentIndex((prev) => {
      const index = (prev + 1) % movies.length;
      return index;
    });
  };

  useEffect(() => {
    galleryImagesRef.current.style.marginLeft = `-${currentIndex * 100}%`;

    const interval = setInterval(() => {
      handleShowNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryImages} ref={galleryImagesRef}>
        {movies.map((movie) => (
          <div
            className={styles.galleryCardBackground}
            key={movie.id}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5), rgb(0,0,0)), url(${movie.bg_img})`,
            }}
          >
            <div className={styles.galleryContent}>
              <div
                className={styles.galleryCardPoster}
                style={{ backgroundImage: `url(${movie.poster_img})` }}
              ></div>
              <h2 className={styles.galleryCardTitle}>{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonsContainer}>
        <div className={styles.buttons} onClick={handleShowPrevious}>
          <i className='fa fa-chevron-left fa-lg'></i>
        </div>
        <div className={styles.buttons} onClick={handleShowNext}>
          <i className='fa fa-chevron-right fa-lg'></i>
        </div>
      </div>

      <div></div>
    </div>
  );
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
