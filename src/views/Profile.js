import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostCardRequest, fetchGetCardRequest } from '../redux/modules/bankCard/actions';

import '../scss/Profile.scss'
import card from '../img/card.png'

const Profile = () => {
    const dispatch = useDispatch();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

    const { statusCard, infoCard } = useSelector(state => state.bankCard);
    const token = JSON.parse(localStorage.getItem('loftTaxi')).token;

    if (!infoCard.id) {
        dispatch(fetchGetCardRequest(token));
    }

    const handlerAddCard = (e) => {
        e.preventDefault();

        dispatch(fetchPostCardRequest({ cardNumber, expiryDate, cvc, cardName, token }));
    }

    return (
        <section>
            <Header />
            <div className='profile'>
                <div className='profile-wrapper'>
                    <h1>Профиль</h1>
                    <h4>Способ оплаты</h4>
                    <form onSubmit={handlerAddCard}>
                        <div className='profile-inner'>
                            <div className='card-title'>
                                <img src={card} alt=""></img>
                                <label>Номер карты:
                            <input
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className='card-number'
                                        type='number'
                                        placeholder={infoCard.cardNumber}
                                        required />
                                </label>
                                <label>Cрок действия:
                            <input
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        className='card-date'
                                        type='number'
                                        placeholder={infoCard.expiryDate}
                                        required />
                                </label>
                            </div>
                            <div className='card-back'>
                                <label>Имя владельца:
                            <input
                                        onChange={(e) => setCardName(e.target.value)}
                                        className='card-name'
                                        type='text'
                                        placeholder={infoCard.cardName}
                                        required />
                                </label>
                                <label>CVC:
                            <input
                                        onChange={(e) => setCvc(e.target.value)}
                                        className='card-cvc'
                                        type='number'
                                        placeholder={infoCard.cvc}
                                        required />
                                </label>
                            </div>
                        </div>
                        {statusCard ? <div className='wrapper-btn'>Поздравляем, ваша карта добавлена!</div> : null}
                        <div className='wrapper-btn'>
                            <button className='btn' type='submit'>Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Profile;
