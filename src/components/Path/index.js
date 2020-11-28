import React from 'react';
import './styles.css';

function Path(props){
    return(
        <div className="path-container">
           <div className="path-name">
            <h1 className="path-number">{props.order}</h1>
            <h1>{props.title}</h1>
           </div>
           <div className="path-status">
               <span>{props.status}</span>
           </div>
           <p>Prazo: {props.deadline_date}</p>
           {props.completed_date} && <p>Entregue: {props.completed_date}</p>
        </div>
    )
}

export default Path;