import React, { useState } from 'react';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostCardRequest } from '../../redux/modules/bankCard/actions';
import { numberValidator, CardSchema, cardNameValidator, cvcValidator } from '../../helpers/validationsSchems';
import { useForm, Controller } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import { DatePicker } from "@material-ui/pickers";

import '../../scss/Profile.scss'
import card from '../../img/card.png'

const Profile = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, control, getValues } = useForm({
        mode: 'onChange',
        validationSchema: CardSchema,
    });

    const { statusCard } = useSelector(state => state.bankCard);

    // Раньше можно было получить было GET запросом данные о карте. Сейчас постоянно false возвращает.
    // Можно конечно на LocalStorage переписать логику,но времени на это нету.
    // Лишние удалил.

    const handlerAddCard = (data) => {
        dispatch(fetchPostCardRequest(data));
    }

    const handleCardNumberInput = ({ target }) => {
        target.value = numberValidator(target.value);
    };

    const handleNameInput = ({ target }) => {
        target.value = cardNameValidator(target.value);
    }

    const handleCvcInput = ({ target }) => {
        target.value = cvcValidator(target.value);
    }

    return (
        <section>
            <Header />
            <div className='profile'>
                <div className='profile-wrapper'>
                    <h1>Профиль</h1>
                    <h4>Способ оплаты</h4>
                    <form onSubmit={handleSubmit(handlerAddCard)}>
                        <div className='profile-inner'>
                            <div className='card-title'>
                                <img src={card} alt=""></img>
                                <label>Номер карты:
                                <TextField
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                        name="cardNumber"
                                        helperText={errors.cardNumber && errors.cardNumber.message}
                                        inputRef={register()}
                                        onInput={handleCardNumberInput}
                                        error={!!errors.cardNumber}
                                    />
                                </label>
                                <label>Cрок действия:
                                <Controller as={DatePicker}
                                        className='card-date'
                                        name='expiryDate'
                                        views={["year", "month"]}
                                        control={control}
                                        inputRef={register({ required: true })}
                                        error={!!errors.expiryDate}
                                        helperText={errors.expiryDate && errors.expiryDate.message}
                                        format={"MM/yy"}
                                        required />
                                </label>
                            </div>
                            <div className='card-back'>
                                <label>Имя владельца:
                                <TextField
                                        type="text"
                                        placeholder="USER NAME"
                                        className='card-name'
                                        name='cardName'
                                        helperText={errors.cardName && errors.cardName.message}
                                        inputRef={register()}
                                        onInput={handleNameInput}
                                        error={!!errors.cardName}
                                    />
                                </label>
                                <label>CVC:
                                <TextField
                                        type="text"
                                        placeholder="000"
                                        className='card-cvc'
                                        name='cvc'
                                        helperText={errors.cvc && errors.cvc.message}
                                        inputRef={register()}
                                        onInput={handleCvcInput}
                                        error={!!errors.cvc}
                                    />
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
