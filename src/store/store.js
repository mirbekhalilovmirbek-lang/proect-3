import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;