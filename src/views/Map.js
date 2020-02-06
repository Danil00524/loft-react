import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import Header from '../components/Header';

import '../scss/Map.scss';
import { mapbox } from '../constants/tokens';

mapboxgl.accessToken = mapbox;

const Map = () => {
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

export default Map;
