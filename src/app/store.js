import { configureStore } from '@reduxjs/toolkit';
import listPokemonsReducer from '../features/listPokemons/listPokemonsSlice';

export const store = configureStore({
  reducer: {
    listPokemons: listPokemonsReducer,
  },
});
