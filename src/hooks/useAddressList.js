import React from 'react';
import { fetchAddressListRequest } from '../redux/modules/addressList/actions'
import { useSelector, useDispatch } from 'react-redux';

const useAddressList = () => {
    const dispatch = useDispatch();
    let statusCard;

    const { allAddress, statusRequest } = useSelector(state => state.addressList);
    if (localStorage.card) {
        const card = JSON.parse(localStorage.card)

        statusCard = card.success;
        if (!statusRequest) {
            dispatch(fetchAddressListRequest());
        }
    }

    return [statusCard, allAddress.addresses]
}

export default useAddressList;
