import React from 'react';
import Header from '../../components/Header';
import MenuHacka from '../../components/MenuHacka';
import Path from '../../components/Path';
import Indicator from '../../components/Indicator';
import './styles.css';
import { Link } from 'react-router-dom';

function Challenges(){
    return(
        <div className="challenges-container">
            <Header />
            <div className="challenges-content-container">
                <MenuHacka />
                <div className="challenges-content">
                    <h1>Desafios</h1>
                    <div className="challenges">
                        <Path order="1" title="Escolha seu desafio" status="Concluído" deadline_date="08/11" completed_date="08/11" />
                        <Path order="2" title="Escolha seu time" status="Pendente" deadline_date="10/11" />
                        <Path order="3" title="Entregar checkpoint" status="Pendente" deadline_date="13/11" />
                        <Path order="4" title="Submeter projeto" status="Pendente" deadline_date="14/11" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Challenges;