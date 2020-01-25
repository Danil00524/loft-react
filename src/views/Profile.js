import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

import '../scss/Profile.scss'
import card from '../img/card.png'

const Profile = ({ setPage }) => {
    return (
        <section>
            <Header setPage={setPage} />
            <div className='profile'>
                <div className='profile-wrapper'>
                    <h1>Профиль</h1>
                    <h4>Способ оплаты</h4>
                    <div className='profile-inner'>
                        <div className='card-title'>
                            <img src={card}></img>
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
            </div>
        </section>

    );
}

Profile.propTypes = {
    setPage: PropTypes.func,
}

export default Profile;
