import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoginRequest } from '../redux/modules/auth/actions'

import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handlerLogin = (e) => {
        e.preventDefault();

        dispatch(fetchLoginRequest({email, password}))
    }

    return (
        <section className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Войти</h1>
                    <span>Новый пользоватей?</span>
                    <Link to='/registration' id='linkToReg'>Зарегистрируйтесь</Link>
                    <form onSubmit={handlerLogin}>
                        <label>Имя пользователя*
                        <input onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>Пароль*
                        <input type='password' onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <div>
                            <input className='btn' type="submit" value='Войти' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
