import React from 'react';
import Prototypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.Prototypes = {
    id: Prototypes.number.isRequired,
    year: Prototypes.number.isRequired,
    title: Prototypes.string.isRequired,
    summary: Prototypes.string.isRequired,
    poster: Prototypes.string.isRequired,
    genres: Prototypes.arrayOf(Prototypes.string).isRequired
};

export default Movie;