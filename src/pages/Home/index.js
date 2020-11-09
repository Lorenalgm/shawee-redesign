import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import './styles.css';

function Home(){
    return(
        <div className="home-container">
            <Header />
            <div className="content-container">
                <Menu />
                <div className="content">
                    xxxxxxxxxxx
                </div>
            </div>
        </div>
    )
}

export default Home;