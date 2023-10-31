import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { key } from '../../API_KEY'
import MovieCard from '../MovieCard';

const Now_playing = () => {
    const [now_playing,setNowplaying]=useState([])
    const getNowPlaying = () => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`)
        .then(res=>{
            console.log(res);
            setNowplaying(res.data.results)
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
                    {now_playing.map((el)=> <MovieCard elem={el}/>) }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Now_playing;