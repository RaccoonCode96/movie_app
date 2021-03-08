import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({id, year, rating, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                title,
                rating,
                year,
                summary,
                poster,
                genres
            }
        }}>
        <div className="movie">
            <div className="movie__page">
                <img className="movie__img" src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title.slice(0, 30)}</h3>
                    {/* <ul className="genres">{genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li> 
                    ))}</ul> */}
                    <h5 className="movie__genres">{genres.join(", ")}</h5>
                    <h5 className="movie__rating">{rating}/10</h5>
                    <p className="movie__summary">{summary.slice(0, 100)}...</p>
                </div>
            </div>
        </div>
        </Link>
    );
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