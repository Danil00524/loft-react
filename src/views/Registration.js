import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterRequest } from '../redux/modules/auth/actions';

import logo from '../img/logo2.png'

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    const handlerRegistration = (e) => {
        e.preventDefault();

        dispatch(fetchRegisterRequest({ name, surname, email, password }))
    }

    return (
        <section className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Регистрация</h1>
                    <span>Уже зарегистрирован?</span>
                    <Link to='/login'>Войти</Link>
                    <form onSubmit={handlerRegistration}>
                        <label>Адрес электронной почты
                        <input onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <span>
                            <label className='name'>
                                Имя
                                <input onChange={(e) => setName(e.target.value)} required></input>
                            </label>
                            <label className='name'>
                                Фамилия
                                <input onChange={(e) => setSurname(e.target.value)} required></input>
                            </label>
                        </span>
                        <label>Пароль
                        <input onChange={(e) => setPassword(e.target.value)} type='password' required />
                        </label>
                        <div>
                            <input className='btn' type="submit" value='Зарегистрироваться' />
                        </div>
                        {isLoading ? <div>Подождите, идет загрузка...</div> : null}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;
