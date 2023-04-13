import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
	name: 'product',
    initialState: [],
    reducers: {
        setProduct: (state, action) => {
            return action.payload
        }
        
    }
})

export const getProductThunk = () => dispatch =>{
    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
        .then(resp => dispatch(setProduct(resp.data)))
        .catch(error => console.error(error))
}

export const filterCategoriesThunk = id => dispatch =>{
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then(resp => dispatch( setProduct (resp.data)))
        .catch(error => console.error(error))
}

export const filterHeadlineThunk = valueInput => dispatch =>{
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${valueInput}`)
        .then(resp => dispatch(setProduct(resp.data)))
        .catch(error => console.error(error))
}

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;