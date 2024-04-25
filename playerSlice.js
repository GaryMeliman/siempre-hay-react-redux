import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {},
    reducers: {
        setPlayer(state, action) {
            return action.payload;
        },
    },
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;