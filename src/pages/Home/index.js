import React from 'react';
import Header from '../../components/Header';
import logo from '../../assets/logo.png';
import hachathon1 from '../../assets/hack.jpeg';
import Menu from '../../components/Menu';
import './styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home(){
    return(
        <div className="home-container">
            <Header />
            <div className="content-container">
                <Menu />
                <div className="content">
                    <div className="open-hackthons">
                        <h2>Hackathons em aberto</h2>

                    </div>
                    <div className="soon">
                        <h2>Em breve</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;