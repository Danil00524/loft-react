import React from 'react';

const Login = ({ setPage }) => {
    const goToPage = e => {
        e.preventDefault();

        setPage('map')
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={goToPage}>
                <input placeholder='Введите имя' required />
                <input placeholder='Введите пароль' required />
                <input type="submit" value='Submit' />
            </form>
        </>
    );
}

export default Login;
