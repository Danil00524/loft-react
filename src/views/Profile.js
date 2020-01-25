import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LoginContext from '../context/Login';
import Header from '../components/Header';

import '../scss/Profile.scss'
import card from '../img/card.png'

const Profile = ({ setPage }) => {
    const { isLoginIn } = useContext(LoginContext);

    const unAuthorized = <h1>Войдите в аккаунт для просмотра данной страницы.</h1>;
    const profile = <div className='profile'>
        <div className='profile-wrapper'>
            <h1>Профиль</h1>
            <h4>Способ оплаты</h4>
            <div className='profile-inner'>
                <div className='card-title'>
                    <img src={card} alt=""></img>
                    <label>Номер карты:
                    <input className='number-card'></input>
                    </label>
                    <label>Cрок действия:
                    <input className='date' placeholder='00/00'></input>
                    </label>
                </div>
                <div className='card-back'>
                    <label>Имя владельца:
                    <input></input>
                    </label>
                    <label>CVC:
                    <input></input>
                    </label>
                </div>
            </div>
            <div className='wrapper-btn'>
                <button className='btn'>Сохранить</button>
            </div>
        </div>
    </div>;

    return (
        <section>
            <Header setPage={setPage} />
            {isLoginIn ? profile : unAuthorized}
        </section>

    );
}

Profile.propTypes = {
    setPage: PropTypes.func,
}

Profile.contextTypes = {
    isLoginIn: PropTypes.bool,
};

export default Profile;
