import React from 'react';
import './styles.css';

function Menu(){
    return(
        <div className="menu-container">
           <div className="menu active">
               <p>Home</p>
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