import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { key } from '../../API_KEY'
import MovieCard from '../MovieCard';

const TopRated = () => {
    const [topRated,setTopRated]=useState([])
    const getTopRated = () => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`)
        .then(res=>{
            console.log(res);
            setTopRated(res.data.results)
        })
    }
    useEffect(()=>{
        getTopRated()
    },[]);
    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    <h1>Top rated</h1>
                    <div className='popular-movie'>
                    {topRated.map((el)=> <MovieCard elem={el}/>) }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;