import React from 'react';
import Header from '../../components/Header';
import logo from '../../assets/logo.png';
import hachathon1 from '../../assets/hack1.png';
import hachathon2 from '../../assets/hack2.png';
import Menu from '../../components/Menu';
import './styles.css';

function Home(){
    return(
        <div className="home-container">
            <Header />
            <div className="content-container">
                <Menu />
                <div className="content">
                    <div className="open-hackthons">
                        <h2>Hackathons em aberto</h2>

                        <div className="open hackthons-images">
                            <img src={hachathon1} alt="Hackathon" />
                            <img src={hachathon1} alt="Hackathon" />
                            <img src={hachathon1} alt="Hackathon" />
                        </div>
                    </div>
                    <div className="soon-hackthons">
                        <h2>Em breve</h2>
                        <div className="soon hackthons-images">
                            <img src={hachathon2} alt="Hackathon" />
                            <img src={hachathon2} alt="Hackathon" />
                            <img src={hachathon2} alt="Hackathon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;