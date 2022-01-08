import React from 'react';

function MovieSideScroll(props){
    return(
    <div className="movie-list">
        {props.movies.map(movie => {
            return(
                <img key={movie.imdbID}src={movie.Poster} alt={movie.Title} className="movie"/>  
            )
        })}
    </div>
    )

}

export default MovieSideScroll;
