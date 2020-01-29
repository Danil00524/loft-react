import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginContext from '../context/Login';
import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = ({ history }) => {
    const { setLogin } = useContext(LoginContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerFormData = () => {
        const formUser = new FormData();

        formUser.append("email", email);
        formUser.append("password", password);

        return formUser;
    }

    const handlerLogin = (e) => {
        e.preventDefault();

        setLogin(true);
        fetch('https://loft-taxi.glitch.me/auth', {
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
                    <h1>Войти</h1>
                    <span>Новый пользоватей?</span>
                    <Link to='/registration' id='linkToReg'>Зарегистрируйтесь</Link>
                    <form onSubmit={handlerLogin}>
                        <label>Имя пользователя*
                        <input onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>Пароль*
                        <input onChange={(e) => setPassword(e.target.value)} required />
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

Login.contextTypes = {
    setLogin: PropTypes.func,
};

export default Login;
