import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function MenuHacka(){
    return(
        <div className="menu-container">
           <h3>Mega Hack 3ª edição</h3>
           <div className="menu active">
               <Link to="/hackathon">
                    <p>Home</p>
               </Link>
           </div>
           <div className="menu">
                <p>Desafios</p>
           </div>
           <div className="menu">
                <p>Times</p>
           </div>
           <div className="menu">
                <p>Mentores</p>
           </div>
           <div className="menu">
                <p>Jurados </p>
           </div>

           <Link className="button back-button" to="/home">
               Voltar para Shawee 
           </Link>           
        </div>
    )
}

export default MenuHacka;