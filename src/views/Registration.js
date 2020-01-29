import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import LoginContext from '../context/Login';
import logo from '../img/logo2.png'

const Registration = ({ history }) => {
    const { setLogin } = useContext(LoginContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerFormData = () => {
        const formUser = new FormData();

        formUser.append("email", email);
        formUser.append("name", name);
        formUser.append("surname", lastName);
        formUser.append("password", password);

        return formUser;
    }

    const handlerRegistration = (e) => {
        e.preventDefault();
        setLogin(true);

        fetch('https://loft-taxi.glitch.me/register', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify(handlerFormData())
        })
            .then((response) => {
                console.log(response)
                history.push("/")
            })
            .catch((e) => console.error(e));
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
                                <input onChange={(e) => setLastName(e.target.value)} required></input>
                            </label>
                        </span>
                        <label>Пароль
                        <input onChange={(e) => setPassword(e.target.value)} type='password' required />
                        </label>
                        <div>
                            <input className='btn' type="submit" value='Зарегистрироваться' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

Registration.contextTypes = {
    setLogin: PropTypes.func,
};

export default Registration;
