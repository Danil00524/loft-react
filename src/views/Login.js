import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginContext from '../context/Login';
import '../scss/Login.scss';
import logo from "../img/logo1.png"

const Login = ({ history }) => {
    const { setLogin } = useContext(LoginContext);

    const goToPageMap = (e) => {
        e.preventDefault();

        setLogin(true);
        history.push('/');
    }

    return (
        <section className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Войти</h1>
                    <span>Новый пользоватей?</span>
                    <Link to='/registration' id='linkToReg'>Зарегистрируйтесь</Link>
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

Login.contextTypes = {
    setLogin: PropTypes.func,
};

export default Login;
