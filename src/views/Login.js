import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoginRequest } from '../redux/modules/auth/actions'

import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    // const handlerFormData = () => {
    //     const formUser = new FormData();

    //     formUser.append("email", email);
    //     formUser.append("password", password);

    //     return formUser;
    // }

    const handlerLogin = (e) => {
        e.preventDefault();
        // const form = handlerFormData();

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
                        {isLoading ? <div>Подождите, идет загрузка...</div> : null}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
