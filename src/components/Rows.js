import React, { useState, useEffect } from 'react'
import "./row.css"
import axios from './axios'

const Rows = ({title, fetchUrl, isLargeRow=false}) => {
    const [Movies, setMovies]=useState([])
    const base_Url ="https://image.tmdb.org/t/p/original/"

    useEffect(()=> {
        async function fetchData() {
            const request= await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {Movies.map(movie=> (
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (
            <img 
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_Url}${
                isLargeRow ? movie.poster_path :movie.backdrop_path
            }`} 
            alt={movie.name}/>
            )
            
        )) 
        }
        </div>
    </div>
  )
}

export default Rows