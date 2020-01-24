import React from 'react';
import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = ({ setPage }) => {
    const goToPageMap = e => {
        e.preventDefault();

        setPage('map')
    }
    const goToPageReg = e => {
        e.preventDefault();

        setPage('registration')
    }

    return (
        <section className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo}></img>
                <div className="form">
                    <h1>Войти</h1>
                    <span>Новый пользоватей?</span>
                    <a onClick={goToPageReg}>Зарегистрируйтесь</a>
                    <form onSubmit={goToPageMap}>
                        <label>Имя пользователя*
                        <input required />
                        </label>
                        <label>Пароль*
                        <input required />
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
