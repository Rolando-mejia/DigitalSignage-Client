import { createSlice } from "@reduxjs/toolkit";
import { getAirportSystem } from "./thunks";

const airportSystemSlice = createSlice({
    name: 'airportsystem',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        airportsystem: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAirportSystem.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAirportSystem.fulfilled, (state, action) => {
            state.loading = false;
            state.airportsystem = action.payload;
        })
        .addCase(getAirportSystem.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default airportSystemSlice;