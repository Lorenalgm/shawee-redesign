import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Path from '../../components/Path';
import Indicator from '../../components/Indicator';
import './styles.css';
import { Link } from 'react-router-dom';

function Hachathon(){
    return(
        <div className="hachathon-container">
            <Header />
            <div className="content-container">
                <Menu />
                <div className="hachathon-content">
                    <div className="path">
                        <Path order="1" title="Escolha seu desafio" status="Concluído" deadline_date="08/11" completed_date="08/11" />
                        <Path order="2" title="Escolha seu time" status="Pendente" deadline_date="10/11" />
                        <Path order="3" title="Entregar checkpoint" status="Pendente" deadline_date="13/11" />
                        <Path order="4" title="Submeter projeto" status="Pendente" deadline_date="14/11" />
                    </div>
                    <div className="indicators">
                        <Indicator title="Atividades concluídas" number="1" total="4" />
                        <Indicator title="Mentorias participadas" number="1" />
                        <Indicator title="Pontos acumulados" number="250" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Hachathon;