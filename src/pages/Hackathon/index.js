import React from 'react';
import Header from '../../components/Header';
import MenuHacka from '../../components/MenuHacka';
import Path from '../../components/Path';
import Indicator from '../../components/Indicator';
import './styles.css';
import { Link } from 'react-router-dom';

function Hachathon(){
    return(
        <div className="hachathon-container">
            <Header />
            <div className="hachathon-content-container">
                <MenuHacka />
                <div className="hachathon-content">
                    <div className="path">
                        <Link className="link-router" to="/challenges">
                            <Path order="1" title="Escolha seu desafio" status="Concluído" deadline_date="08/11" completed_date="08/11" />
                        </Link>
                        <Link className="link-router" to="/challenges">
                            <Path order="2" title="Escolha seu time" status="Pendente" deadline_date="10/11" />
                        </Link>
                        <Link className="link-router" to="/challenges">
                            <Path order="3" title="Entregar checkpoint" status="Pendente" deadline_date="13/11" />
                        </Link>
                        <Link className="link-router" to="/challenges">
                            <Path order="4" title="Submeter projeto" status="Pendente" deadline_date="14/11" />
                        </Link>
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