import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const favoritesSilice = createSlice({
	name: 'cart',
    initialState: [],
    reducers: {
        setFavorites: (state, action) => {
            return action.payload
        }
        
    }
})

export const getCartThunk = () => dispatch => {

    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then(resp => dispatch(setFavorites(resp.data)))
        .catch(error=> console.error(error))
}

export const createProductThunk = data => dispatch => {

    axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error => console.error(error))

}

export const cartCheckoutThunk = () => dispatch => {

    axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", {} ,  getConfig())
        .then( () => dispatch( getCartThunk() ))
        .catch(error => console.error(error))
}


export const { setFavorites } = favoritesSilice.actions;

export default favoritesSilice.reducer;