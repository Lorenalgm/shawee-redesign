import React from 'react';
import Header from '../../components/Header';
import MenuHacka from '../../components/MenuHacka';
import './styles.css';

function Challenges(){
    return(
        <div className="challenges-container">
            <Header />
            <div className="challenges-content-container">
                <MenuHacka />
                <div className="challenges-content">
                    <h1>Desafios</h1>
                    <div className="challenges">
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Challenges;