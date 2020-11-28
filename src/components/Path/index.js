import React from 'react';
import './styles.css';

function Path(props){
    return(
        <div className="path-container">
           <div className="path-name">
            <h1 className="path-title"><span>{props.order}.</span> {props.title}</h1>
           </div>
           <div className="path-info">
               <span className={props.completed_date?'path-status finished-status':'path-status pending-status'}>{props.status}</span>
               {!props.completed_date 
               && <p>Prazo: <span className="pending">{props.deadline_date}</span></p>}

               {props.completed_date 
               && <><p>Prazo: <span className="finished">{props.deadline_date}</span></p>
                    <p>Entregue: <span className="finished">{props.completed_date}</span></p></>
               }
           </div>
        </div>
    )
}

export default Path;