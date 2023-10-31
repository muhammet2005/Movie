import React from 'react';

const MovieCard = ({elem}) => {
    return (
        <div className='movie'>
            <img 
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${elem.poster_path}`}
             alt=""
             />
            </div>
    );
};

export default MovieCard;