import { configureStore } from '@reduxjs/toolkit';
import uReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
