
import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product.slice'
import cart from './slices/favorites.slice'






export default configureStore({
    reducer: {
        product,
        cart
	}
})