import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { key } from '../../API_KEY'
import MovieCard from '../MovieCard';

const Now_playing = () => {
    const [nowPlaying,setNowPlaying]=useState([])
    const getNowPlaying = () => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`)
        .then(res=>{
            console.log(res);
            setNowPlaying(res.data.results)
        })
    }
    useEffect(()=>{
        getNowPlaying()
    },[])
    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    <h1>Now playing</h1>
                    <div className='popular-movie'>
                    {nowPlaying.map((el)=> <MovieCard elem={el}/>) }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Now_playing;