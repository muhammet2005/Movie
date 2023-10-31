import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { key } from '../../API_KEY'
import MovieCard from '../MovieCard';

const Popular = () => {
    const [popular,setPopular]=useState([])
    const getPopular = () => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`)
        .then(res=>{
            console.log(res);
            setPopular(res.data.results)
        })
    }
    console.log(popular);
    useEffect(()=>{
        getPopular()
    },[])
    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    <h1>Popular</h1>
                    <div className='popular-movie'>
                    {popular.map((el)=> <MovieCard elem={el}/>) }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;