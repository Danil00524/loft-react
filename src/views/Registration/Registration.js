import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterRequest } from '../../redux/modules/auth/actions';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import logo from '../../img/logo2.png'

const RegisterSchema = yup.object().shape({
    email: yup.string().required('Поле должно быть заполнено.').email('Введите корректный email.'),
    name: yup.string().required('Поле должно быть заполнено.'),
    surname: yup.string().required('Поле должно быть заполнено.'),
    password: yup.string().required('Поле должно быть заполнено.').min(8, 'Пароль должен состоять из 8-ми символов.')
});

const Registration = () => {
    const { register, handleSubmit, getValues, errors } = useForm({
        validationSchema: RegisterSchema,
    });
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    const handlerRegistration = () => {
        dispatch(fetchRegisterRequest({ name, surname, email, password }))
    }

    return (
        <section data-testid='registration-wrapper' className='login'>
            <div className='container login-wrapper'>
                <img className='logo' src={logo} alt=""></img>
                <div className="form">
                    <h1>Регистрация</h1>
                    <span>Уже зарегистрирован?</span>
                    <Link to='/login'>Войти</Link>
                    <form onSubmit={handleSubmit(handlerRegistration)}>
                        <label>Адрес электронной почты
                        <input data-testid='email' name='email' ref={register} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </label>
                        <span>
                            <label className='name'>
                                Имя
                                <input
                                    data-testid='name'
                                    name='name'
                                    ref={register}
                                    onChange={(e) => setName(e.target.value)}></input>
                                {errors.name && <p>{errors.name.message}</p>}
                            </label>

                            <label className='name'>
                                Фамилия
                                <input
                                    data-testid='fullName'
                                    name='surname'
                                    ref={register}
                                    onChange={(e) => setSurname(e.target.value)}></input>
                                {errors.surname && <p>{errors.surname.message}</p>}
                            </label>
                        </span>
                        <label>
                            Пароль
                        <input
                                data-testid='password'
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                name='password'
                                ref={register} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </label>
                        <div>
                            <input data-testid='btn-submit' className='btn' type="submit" value='Зарегистрироваться' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;
