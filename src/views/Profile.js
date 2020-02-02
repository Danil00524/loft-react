import React, { useState } from 'react';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardRequest } from '../redux/modules/auth/actions';

import '../scss/Profile.scss'
import card from '../img/card.png'

const Profile = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

    const { isLoadingCard, statusCard } = useSelector(state => state.bankCard);
    const { isLogin, token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handlerAddCard = (e) => {
        e.preventDefault();

        dispatch(fetchCardRequest({ cardNumber, expiryDate, cvc, cardName, token }));
    }

    const unAuthorized = <h1>Войдите в аккаунт для просмотра данной страницы.</h1>;
    const profile = <div className='profile'>
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
                                required />
                        </label>
                        <label>Cрок действия:
                            <input
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className='card-date'
                                type='number'
                                placeholder='00/00'
                                required />
                        </label>
                    </div>
                    <div className='card-back'>
                        <label>Имя владельца:
                            <input
                                onChange={(e) => setCardName(e.target.value)}
                                className='card-name'
                                type='text'
                                required />
                        </label>
                        <label>CVC:
                            <input
                                onChange={(e) => setCvc(e.target.value)}
                                className='card-cvc'
                                type='number'
                                required />
                        </label>
                    </div>
                </div>
                {isLoadingCard ? <div>Идет обработка запроса...</div> : null}
                {statusCard ? <div className='wrapper-btn'>Поздравляем, ваша карта добавлена!</div> : null}
                <div className='wrapper-btn'>
                    <button className='btn' type='submit'>Сохранить</button>
                </div>
            </form>
        </div>
    </div>;

    return (
        <section>
            <Header />
            {isLogin ? profile : unAuthorized}
        </section>

    );
}

export default Profile;
