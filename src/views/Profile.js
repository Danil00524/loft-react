import React, { useState } from 'react';
import Header from '../components/Header';

import '../scss/Profile.scss'
import card from '../img/card.png'

const Profile = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [namePerson, setNamePerson] = useState('');
    const [cvc, setCvc] = useState('');

    const handlerFormData = () => {
        const formUser = new FormData();

        formUser.append("cardNumber", cardNumber);
        formUser.append("expiryDate", expiryDate);
        formUser.append("cardName", namePerson);
        formUser.append("cvc", cvc);

        return formUser;
    }

    const handlerAddCard = (e) => {
        e.preventDefault();

        fetch('https://loft-taxi.glitch.me/card', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify(handlerFormData())
        })
            .then((response) => {
                console.log(response)
            })
            .catch((e) => console.error(e));
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
                                onChange={(e) => setNamePerson(e.target.value)}
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
                <div className='wrapper-btn'>
                    <button className='btn' type='submit'>Сохранить</button>
                </div>
            </form>
        </div>
    </div>;

    return (
        <section>
            <Header />
            {false ? profile : unAuthorized}
        </section>

    );
}

export default Profile;
