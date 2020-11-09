import React from 'react';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpeg';
import './styles.css';
import { FaBell, FaCog  } from 'react-icons/fa';

function Header(){
    return(
        <div className="header-container">
            <img src={logo} className="logo-header" alt="Logo da Shawee" />
            <nav>
                <ul>
                    <li><FaBell /></li>
                    <li><FaCog /></li>
                    <li className="my-profile"><img src={profile} className="profile" alt="Foto do perfil" />&nbsp;&nbsp;Lorena Montes</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;