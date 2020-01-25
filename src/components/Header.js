import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo2.png'

const Header = ({ setPage }) => {
    const goToPage = (e) => {
        e.preventDefault();

        const page = e.target.name;

        setPage(page)
    }

    return (
        <header className="App-header">
            <img src={logo} />
            <div className='header'>
                <button name='map' onClick={goToPage}>Карта</button>
                <button name='profile' onClick={goToPage}>Профиль</button>
                <button name='login' onClick={goToPage}>Войти</button>
            </div>
        </header>
    );
}


Header.propTypes = {
    setPage: PropTypes.func,
}

export default Header;
