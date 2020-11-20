import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menu-container">
           <div className="menu active">
               <Link to="/home">
                    <p>Home</p>
               </Link>
           </div>
           <div className="menu">
                <p>Meus hackathons</p>
           </div>
           <div className="menu">
                <p>Hachathons</p>
           </div>
           <div className="menu">
                <p>Comunidade</p>
           </div>
           <div className="menu">
                <p>Mega Rank</p>
           </div>
        </div>
    )
}

export default Menu;