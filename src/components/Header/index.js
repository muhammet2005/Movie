import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/img/original.png"

const Header = () => {
    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <img src={Logo} alt=""/>
                    <div className='nav'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/popular'>Popular</NavLink>
                        <NavLink to='/now_playin'>Now playing</NavLink>
                        <NavLink to='/top_rated'>Top rated</NavLink>
                    </div>
                    <button>dark</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;