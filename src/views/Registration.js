import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo2.png'

const Registration = ({ setPage }) => {
    const goToPageMap = (e) => {
        e.preventDefault();

        setPage('map')
    }

    const goToPageLog = e => {
        e.preventDefault();

        setPage('login')
    }
    return (
        <section className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo}></img>
                <div className="form">
                    <h1>Регистрация</h1>
                    <span>Уже зарегистрирован?</span>
                    <a onClick={goToPageLog}>Войти</a>
                    <form onSubmit={goToPageMap}>
                        <label>Адрес электронной почты
                        <input required />
                        </label>
                        <span>
                            <label className='name'>
                                Имя
                                <input required></input>
                            </label>
                            <label className='name'>
                                Фамилия
                                <input required></input>
                            </label>
                        </span>
                        <label>Пароль
                        <input required />
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

Registration.propTypes = {
    setPage: PropTypes.func,
}


export default Registration;
