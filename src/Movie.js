import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({rating, title, summary, poster, genres}) {
    return <div className="movie">
            <div className="page">
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title.slice(0, 30)}</h3>
                    {/* <ul className="genres">{genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li> 
                    ))}</ul> */}
                    <h5 className="movie__genres">{genres.join(", ")}</h5>
                    <h5 className="movie__rating">{rating}/10</h5>
                    <p className="movie__summary">{summary.slice(0, 220)}...</p>
                </div>
            </div>
        </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;