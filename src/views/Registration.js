import React from 'react';

const Registration = ({setPage}) => {
    const goToPage = (e) => {
        e.preventDefault();

        setPage('map')
    }
    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={goToPage}>
                <input placeholder='Введите email' required/>
                <input placeholder='Введите ФИО' required/>
                <input placeholder='Введите пароль' required/>
                <input type='submit' value='Submit' />
            </form>
        </>

    );
}

export default Registration;
