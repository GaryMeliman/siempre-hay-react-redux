import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import playerSlice from './playerSlice';
import episodesSlice from './episodesSlice';

const rootReducer = combineReducers({
    user: userReducer,
    player: playerSlice,
    episodes: episodesSlice
});

export default rootReducer;