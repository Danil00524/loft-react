import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    email: yup.string().required('Поле должно быть заполнено.').email('Введите корректный email.'),
    name: yup.string().required('Поле должно быть заполнено.'),
    surname: yup.string().required('Поле должно быть заполнено.'),
    password: yup.string().required('Поле должно быть заполнено.').min(8, 'Пароль должен состоять минимум из 8-ми символов.')
});

export const LoginSchema = yup.object().shape({
    login: yup.string().required('Заполните поле.').email('Введите корректный email.'),
    password: yup.string().required('Заполните поле.').min(8, 'Пароль должен состоять минимум из 8 символов.'),
});

export const numberValidator = (value) => {
    let cardPattern = value.replace(/[^\d]/g, '').substring(0, 16);
    cardPattern = cardPattern !== '' ? cardPattern.match(/.{1,4}/g).join(' ') : '';
    value = cardPattern;

    return value
};

export const cvcValidator = value => value.replace(/[^\d]/g, '').substring(0,3);

export const cardNameValidator = value => value.replace(/[^a-z\s]+/ig, "").toUpperCase().substring(0,22);

export const CardSchema = yup.object().shape({
    cardNumber: yup.string('Введите цифры.').length(19, 'Номер карты должен состоять из 16-ти символов.').required('Заполните поле.'),
    expiryDate: yup.string('Введите форматом 01/02.').required('Заполните поле.'),
    cardName: yup.string().required('Заполните поле.'),
    cvc: yup.string('Введите цифры.').required('Заполните поле.').length(3, 'CVC содержит 3 цифры.')
});
