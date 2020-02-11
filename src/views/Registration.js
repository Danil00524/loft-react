import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterRequest } from '../redux/modules/auth/actions';

import logo from '../img/logo2.png'

const Registration = ({ requestRegister }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    const handlerRegistration = (e) => {
        e.preventDefault();

        if (name && surname && email && password) {
            requestRegister();
        }

        dispatch(fetchRegisterRequest({ name, surname, email, password }))
    }

    return (
        <section data-testid='registration-wrapper' className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Регистрация</h1>
                    <span>Уже зарегистрирован?</span>
                    <Link to='/login'>Войти</Link>
                    <form onSubmit={handlerRegistration}>
                        <label>Адрес электронной почты
                        <input data-testid='email' onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <span>
                            <label className='name'>
                                Имя
                                <input data-testid='name' onChange={(e) => setName(e.target.value)} required></input>
                            </label>
                            <label className='name'>
                                Фамилия
                                <input data-testid='fullName' onChange={(e) => setSurname(e.target.value)} required></input>
                            </label>
                        </span>
                        <label>Пароль
                        <input data-testid='password' onChange={(e) => setPassword(e.target.value)} type='password' required />
                        </label>
                        <div>
                            <input data-testid='btn-submit' className='btn' type="submit" value='Зарегистрироваться' />
                        </div>
                        {isLoading ? <div>Подождите, идет загрузка...</div> : null}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;
