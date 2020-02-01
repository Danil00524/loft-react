import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo2.png'

const Header = () => {
    const logoutUser = (e) => {
        e.preventDefault();
    }

    const goIn = <Link to='/login'>Войти</Link>;
    const goOut = <Link to='/' onClick={logoutUser}>Выйти</Link>;

    return (
        <header className="App-header" >
            <img src={logo} alt=""/>
            <div className='header'>
                <Link to='/'>Карта</Link>
                <Link to='/profile'>Профиль</Link>
                {false ? goOut : goIn}
            </div>
        </header>
    );
}

export default Header;
