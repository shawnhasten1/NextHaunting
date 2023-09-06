'use client';

import { createSlice } from '@reduxjs/toolkit';
import { FLOORS } from '@/public/tiles';

export interface CurrentFloorState {
    value: string;
}

const initialState: CurrentFloorState = {
    value: FLOORS.GROUND,
};

export const currentFloorSlice = createSlice({
    name: 'currentFloor',
    initialState,
    reducers: {
        setCurrentFloor: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setCurrentFloor } = currentFloorSlice.actions;

export default currentFloorSlice.reducer;