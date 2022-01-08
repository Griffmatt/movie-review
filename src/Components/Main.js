import React, { useState, useEffect } from 'react';
import MovieSearch from './MovieSearch';
import SearchBar from './SearchBar';

function Main(){
    const [movies, setMovies]= useState([]);
    const [searchMovie, setSearchMovie]= useState([])

    const getMovie = async(searchMovie) => {
        const url = `http://www.omdbapi.com/?s=${searchMovie}&page=1&apikey=1c5e1c27`
        
        const response = await fetch(url);
        const responseJson = await response.json();
        
        if (responseJson.Search){
        setMovies(responseJson.Search)}
        else{
            setMovies([])
        }
    };

    useEffect(() => {getMovie(searchMovie)
    }, [searchMovie]);
    return(
        <div className="container-fluid">
            <div className="row">
                <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
            </div>
            <div className="row">
                <MovieSearch movies={movies}/>
            </div>
        </div>  
    )
}

export default Main;