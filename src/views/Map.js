import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

import Header from '../components/Header';
// import LoginContext from '../context/Login';
// const { isLoginIn } = useContext(LoginContext);

import '../scss/Map.scss';
import { mapbox } from '../constants/tokens';

mapboxgl.accessToken = mapbox;

const Maps = () => {
    let mapContainer = React.createRef();

    useEffect(() => {
        new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9,
        });
    }, [mapContainer]);

    return (
        <section className='map'>
            <Header />
            <div id="map" ref={el => mapContainer = el}></div>
        </section>
    );
}

Maps.contextTypes = {
    isLoginIn: PropTypes.bool.isRequired,
};

export default Maps;
