import { persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import persistConfig from './persistConfig';

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
});

export const persistor = persistStore(store);
export default store;