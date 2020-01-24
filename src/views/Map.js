import React from 'react';
import Header from '../components/Header';

const Maps = ({ setPage }) => {
    return (
        <section className='map'>
            <Header setPage={setPage} />
            <div className='container'>
            </div>
        </section>
    );
}

export default Maps;
