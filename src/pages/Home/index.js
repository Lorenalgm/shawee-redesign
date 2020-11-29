import React from 'react';
import Header from '../../components/Header';
import hachathon1 from '../../assets/hack1.png';
import hachathon2 from '../../assets/hack2.png';
import Menu from '../../components/Menu';
import './styles.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home-container">
            <Header />
            <div className="home-content-container">
                <Menu className="teste" />
                <div className="home-content">
                    <div className="open-hackthons">
                        <h2>Hackathons em aberto</h2>

                        <div className="open hackthons-images">
                            <Link to="/detail">
                                <img src={hachathon1} alt="Hackathon" />
                            </Link>
                            <Link to="/detail">
                                <img src={hachathon1} alt="Hackathon" />
                            </Link>
                            <Link to="/detail">
                                <img src={hachathon1} alt="Hackathon" />
                            </Link>
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