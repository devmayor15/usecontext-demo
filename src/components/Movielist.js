import React, { useState, useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'

function Movielist() {
    const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
        
        {movies.map(movie =>{
            return <Movie name={movie.name} price={movie.price}/>
        })}
    </div>
  )
}

export default Movielist