import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = () => {
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

        const form = handlerFormData();
        // fetch('https://loft-taxi.glitch.me/auth', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(handlerFormData())
        // })
        //     .then((response) => {
        //         console.log(response)
        //         history.push("/")
        //     })
        //     .catch((e) => console.error(e));
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

export default Login;
