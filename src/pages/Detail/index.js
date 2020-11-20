import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import './styles.css';
import { Link } from 'react-router-dom';

function Detail(){
    return(
        <div className="detail-container">
            <Header />
            <div className="content-container">
                <Menu />
                <div className="content">
                    <div className="about">
                        <h1>Mega Hack 3ª edição</h1>
                        <p>
                        O Monte Everest dos hackathons, e é preciso preparo para chegar ao topo.

                        Serão 11 dias, 10 diferentes desafios para escolher e infinitas possibilidades.

                        Então, prepare-se!
                        </p>
                        <Link className="button">Acessar evento</Link>
                    </div>
                    <div className="schedule">
                        <h3>Cronograma</h3>
                        <div className="event">
                            <span>01/10 a 08/11</span>
                            <p>Inscrições</p>
                        </div>
                        <div className="event">
                            <span>01/10 a 08/11</span>
                            <p>Live de abertura</p>
                        </div>
                        <div className="event">
                            <span>01/10 a 08/11</span>
                            <p>Criação de times</p>
                        </div>
                        <div className="event">
                            <span>01/10 a 08/11</span>
                            <p>Desenvolvimento das soluções</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Detail;