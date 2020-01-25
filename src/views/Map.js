import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

import '../scss/Map.scss';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const Maps = ({ setPage }) => {
    let mapContainer = React.createRef();

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWwwMDUyNCIsImEiOiJjazV0amd0NXYwNjA5M2VvYTE1ZmU4dThyIn0.Zn65a2N1HP929vgwZeimNQ';

    useEffect(() => {
        mapContainer = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9,
        });
    }, []);

    return (
        <section className='map'>
            <Header setPage={setPage} />
            <div id="map" ref={el => mapContainer = el}></div>
        </section>
    );
}

Maps.propTypes = {
    setPage: PropTypes.func,
}

export default Maps;
