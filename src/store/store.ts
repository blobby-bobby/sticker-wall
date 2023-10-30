import { configureStore } from '@reduxjs/toolkit';
import screenshots from '@/reducers/screenshots';
import stickers from '@/reducers/stickers';

const store = configureStore({
	reducer: { screenshots, stickers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;