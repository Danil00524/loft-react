import React from 'react';

const Header = ({setPage}) => {
    const goToPage = (e) => {
        e.preventDefault();

        const page = e.target.name;

        setPage(page)
    }

    return (
        <header className="App-header">
            <button name='profile' onClick={goToPage}>Профиль</button>
            <button name='map' onClick={goToPage}>Карта</button>
            <button name='login' onClick={goToPage}>Логин</button>
            <button name='registration' onClick={goToPage}>Регистрация</button>
        </header>
    );
}

export default Header;
