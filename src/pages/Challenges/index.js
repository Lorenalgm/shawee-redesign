import React from 'react';
import Header from '../../components/Header';
import MenuHacka from '../../components/MenuHacka';
import Challenge from '../../components/Challenge';
import './styles.css';
import sebrae from '../../assets/sebrae.png';

function Challenges(){
    return(
        <div className="challenges-container">
            <Header />
            <div className="challenges-content-container">
                <MenuHacka />
                <div className="challenges-content">
                    <h1>Desafios</h1>
                    <div className="challenges">
                        <Challenge title="Sebrae" description="Como a atuação em rede pode ajudar a solucionar problemas escancarados
                        pela crise da COVID-19: gestão do tempo; limites entre profissional e pessoal; cuidados
                        com crianças/ idosos; saúde psicológica e violência doméstica?" image_url={sebrae} />
                        
                        <Challenge title="Sebrae" description="Como a atuação em rede pode ajudar a solucionar problemas escancarados
                        pela crise da COVID-19: gestão do tempo; limites entre profissional e pessoal; cuidados
                        com crianças/ idosos; saúde psicológica e violência doméstica?" image_url={sebrae} />
                         
                        <Challenge title="Sebrae" description="Como a atuação em rede pode ajudar a solucionar problemas escancarados
                        pela crise da COVID-19: gestão do tempo; limites entre profissional e pessoal; cuidados
                        com crianças/ idosos; saúde psicológica e violência doméstica?" image_url={sebrae} />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Challenges;