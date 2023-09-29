import { createSlice } from "@reduxjs/toolkit";
import { getFlightDestinations } from "./thunks";

const flightDestinationSlice = createSlice({
    name: 'flightdestination',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        flightdestination: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getFlightDestinations.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getFlightDestinations.fulfilled, (state, action) => {
            state.loading = false;
            state.flightdestination = action.payload;
        })
        .addCase(getFlightDestinations.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default flightDestinationSlice;