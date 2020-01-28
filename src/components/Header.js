import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Login from '../context/Login';
import PropTypes from 'prop-types';
import logo from '../img/logo2.png'

const Header = () => {
    const { isLoginIn, login } = useContext(Login);

    const logoutUser = (e) => {
        e.preventDefault();
        login(false)
    }

    const goIn = <Link to='/login'>Войти</Link>;
    const goOut = <Link to='/' onClick={logoutUser}>Выйти</Link>;

    return (
        <header className="App-header" >
            <img src={logo} alt=""/>
            <div className='header'>
                <Link to='/'>Карта</Link>
                <Link to='/profile'>Профиль</Link>
                {isLoginIn ? goOut : goIn}
            </div>
        </header>
    );
}

Header.contextTypes = {
    isLoginIn: PropTypes.bool,
    login: PropTypes.func,
};

export default Header;
