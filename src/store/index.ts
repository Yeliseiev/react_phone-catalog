import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import favouritesReducer from './slices/favouritesSlice';
import cartReducer from './slices/cartSlice';
import productDetailsReducer from './slices/productDetailsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritesReducer,
    cartItems: cartReducer,
    productDetails: productDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
