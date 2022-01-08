import React from "react";

function SearchBar(props){
    return(
        <div className="col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 col">
            <input type="search" placeholder="Search For A Movie!" className="search-bar field" value={props.value}onChange={(event)=> props.setSearchMovie(event.target.value)}></input>
        </div>
    )
}

export default SearchBar;