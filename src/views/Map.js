import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { mapbox } from '../constants/tokens';
import '../scss/Map.scss';

import Header from '../components/Header';
import useAddressList from '../hooks/useAddressList';

mapboxgl.accessToken = mapbox;
const Map = () => {
    let mapContainer = React.createRef();
    const [statusCard, allAddress] = useAddressList();

    console.log(statusCard)
    console.log(allAddress)

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
            {statusCard &&
                <div className="popup-taxi">
                    <form>
                        <select placeholder="Откуда">
                            <option>sdasd</option>
                            <option>sdasd</option>
                        </select>
                        <select placeholder="Куда"></select>
                    </form>
                    <div className="btn">
                        <button>Вызвать такси</button>
                    </div>
                </div>
            }
        </section>
    );
}

export default Map;
