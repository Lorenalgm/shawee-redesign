import React from 'react';
import './styles.css';

function Challenge(props){
    return(
        <div className="challenge-container">
           <img src={props.image_url} alt={props.title} />
           <div className="challenge-content">
                <div className="challenge-text">
                    <h1 className="path-title">{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div className="challenge-actions">
                    <a href="https://github.com/Lorenalgm/shawee-redesign" alt="Escolher" className="button">Escolher</a>
                    <a href="https://github.com/Lorenalgm/shawee-redesign" alt="Saber mais" className="button challenge-more">Saber mais</a>
                </div>
           </div>
        </div>
    )
}

export default Challenge;