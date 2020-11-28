import React from 'react';
import './styles.css';

function Indicator(props){
    return(
        <div className="indicator-container">
            <h2>{props.title}</h2>
            <h1>{props.number}{props.total && <span>/{props.total}</span>}</h1>
        </div>
    )
}

export default Indicator;