import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { mapbox } from '../../constants/tokens';
import '../../scss/Map.scss';

import { fetchRouteTaxiRequest } from '../../redux/modules/routeTaxi/actions';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Header from '../../components/Header';
import useAddressList from '../../hooks/useAddressList';

const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};

const Map = () => {
    let mapContainer = React.createRef();
    const dispatch = useDispatch();
    const { coordinates, statusRequest, isLoadingRoute } = useSelector(state => state.routeTaxi);
    const [statusCard, allAddress] = useAddressList();
    const [addressFrom, setAddressFrom] = useState(null);
    const [addressTo, setAddressTo] = useState(null);
    const [map, setMap] = useState(null);
    const [statusAddresses, setStatusAddresses] = useState(true);
    let filterAllAddress;

    if (allAddress) {
        filterAllAddress = allAddress.filter((e) => e !== addressFrom && e !== addressTo);
    };

    // useCallback - при его вызове смотри на [elem, elem2], если ни один из них не изменился с прошлого вызова, то
    // useCallback возвращает прошлое знание.
    const handlerCallTaxi = useCallback((e) => {
        e.preventDefault();

        if (!addressFrom || !addressTo) {
            setStatusAddresses(false);
        } else {
            setStatusAddresses(true);
        }

        if (addressFrom && addressTo) {
            dispatch(fetchRouteTaxiRequest({ addressFrom, addressTo }));
        }
    }, [addressFrom, addressTo])

    useEffect(() => {
        mapboxgl.accessToken = mapbox;
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.3350986, 59.9342802],
            zoom: 9,
        });

        setMap(map);
    }, [])

    useEffect(() => {
        if (map && coordinates.length) {
            drawRoute(map, coordinates);


            // Выполнит её только тогда, когда наступит время сбросить эффект.
            // Что бы не происходила "утечка памяти". Аналогично componentWillUnmount.
            // return () => {
            //     map.remove();
            // }
        }
    }, [map, allAddress, coordinates]);

    const layoutFormCallTaxi = <div className="popup-taxi">
        <form>
            <div className="from">
                <Autocomplete
                    id="combo-box-demo"
                    options={filterAllAddress}
                    onChange={(event, newValue) => {
                        event.preventDefault();

                        setAddressFrom(newValue);
                    }}
                    getOptionLabel={option => option}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" fullWidth />
                    )}
                />
            </div>
            <div className="to">
                <Autocomplete
                    id="combo-box-demo"
                    options={filterAllAddress}
                    getOptionLabel={option => option}
                    onChange={(event, newValue) => {
                        event.preventDefault();

                        setAddressTo(newValue);
                    }}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Куда" fullWidth />
                    )}
                />
            </div>
            <button className="btn" onClick={handlerCallTaxi}>Вызвать такси</button>
            {isLoadingRoute && <div className='text'>Поиск автомобиля...</div>}
            {!statusAddresses && <div className='text-error'>Заполните поля.</div>}
        </form>
    </div>;

    const infoPopup = <div className='with-out-card__wrapper'>
        <h1>Что бы вызвать такси - нужно зарегистрироваться и добавить кредитную карту в своем личном кабинете.</h1>
        <div>
            <Link to='/profile' className="btn">Профиль</Link>
        </div>
    </div>;

    return (
        <section className='map'>
            <Header />
            <div id="map" ref={el => mapContainer = el}></div>
            {statusCard ? layoutFormCallTaxi : infoPopup}
        </section>
    );
}

export default Map;
