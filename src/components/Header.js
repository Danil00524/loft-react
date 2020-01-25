import React, { useContext } from 'react';
import Login from '../context/Login';
import PropTypes from 'prop-types';
import logo from '../img/logo2.png'

const Header = ({ setPage }) => {
    const { isLoginIn, login } = useContext(Login);

    const goToPage = (e) => {
        e.preventDefault();

        const page = e.target.name;

        setPage(page)
    }

    const logoutUser = (e) => {
        e.preventDefault();
        login(false)
    }

    const goIn = <button name='login' onClick={goToPage}>Войти</button>;
    const goOut = <button name='login' onClick={logoutUser}>Выйти</button>;

    return (
        <header className="App-header" >
            <img src={logo} alt=""/>
            <div className='header'>
                <button name='map' onClick={goToPage}>Карта</button>
                <button name='profile' onClick={goToPage}>Профиль</button>
                {isLoginIn ? goOut : goIn}
            </div>
        </header>
    );
}


Header.propTypes = {
    setPage: PropTypes.func,
}

Header.contextTypes = {
    isLoginIn: PropTypes.bool,
    login: PropTypes.func,
};

export default Header;
