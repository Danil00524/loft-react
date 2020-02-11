import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoginRequest } from '../redux/modules/auth/actions'

import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = ({ requestLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handlerLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            requestLogin();
        }

        dispatch(fetchLoginRequest({ email, password }))
    }

    return (
        <section data-testid='section-wrapper-login' className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Войти</h1>
                    <span>Новый пользоватей?</span>
                    <Link data-testid='registration' to='/registration' id='linkToReg'>Зарегистрируйтесь</Link>
                    <form onSubmit={handlerLogin}>
                        <label>Имя пользователя*
                        <input data-testid='name' onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>Пароль*
                        <input data-testid='password' type='password' onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <div>
                            <input data-testid='btn-submit' className='btn' type="submit" value='Войти' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
