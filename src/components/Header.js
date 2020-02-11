import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/modules/auth/actions';

import logo from '../img/logo2.png'

const Header = () => {
    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch();

    const logoutUser = (e) => {
        e.preventDefault();

        dispatch(logoutAction());
        localStorage.card = '';
        localStorage.loftTaxi = '';
    }

    const renderAuthLink = () => {
        const goIn = <Link data-testid='loginId' to='/login'>Войти</Link>;
        const goOut = <Link to='/' onClick={logoutUser}>Выйти</Link>;

        return isLogin ? goOut : goIn
    }

    return (
        <header className="App-header" >
            <img data-testid='img' src={logo} alt="img" />
            <div className='header'>
                <NavLink data-testid='map' exact to='/'>Карта</NavLink>
                <NavLink data-testid='profile' exact to='/profile'>Профиль</NavLink>
                {renderAuthLink()}
            </div>
        </header>
    );
}

export default Header;
