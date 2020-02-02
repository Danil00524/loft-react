import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/modules/auth/actions';

import logo from '../img/logo2.png'

const Header = () => {
    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch();

    const logoutUser = (e) => {
        e.preventDefault();

        dispatch(logoutAction());
    }

    const goIn = <Link to='/login'>Войти</Link>;
    const goOut = <Link to='/' onClick={logoutUser}>Выйти</Link>;

    return (
        <header className="App-header" >
            <img src={logo} alt=""/>
            <div className='header'>
                <Link to='/'>Карта</Link>
                <Link to='/profile'>Профиль</Link>
                {isLogin ? goOut : goIn}
            </div>
        </header>
    );
}

export default Header;
