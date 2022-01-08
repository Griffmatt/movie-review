import React from 'react';

function MovieSearch({movies}){
    return(
    <>
        {movies.map(movie => {
            return(
                <div className="col-sm-3 col-6 mt-4">
                    <img key={movie.imdbID}src={movie.Poster} alt={movie.Title} className="movie"/>  
                </div>
            )
        })}
    </>
    )

}

export default MovieSearch;