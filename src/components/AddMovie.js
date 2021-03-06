import React, { useState, useContext } from 'react'
import {MovieContext} from './MovieContext'

function AddMovie() {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value)
    }
    const AddMovie = (e) =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }

  return (
    <form onSubmit={AddMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
    </form>
  )
}

export default AddMovie