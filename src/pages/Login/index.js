import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './styles.css';

function Login(){
    return(
        <div className="container">
            <img src={logo} className="logo" alt="Logo da Shawee" />
            <div className="login">
                
                <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>

                <div className="input-block">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" />
                </div>

                <p className="forgot-password">Esqueci minha senha</p>

                <Link className="button" to="/">
                    Entrar
                </Link>
                <p className="register">Não tem uma conta? <a href="https://github.com/Lorenalgm">Cadastre-se</a></p>
            </div>
        </div>
    )
}

export default Login;