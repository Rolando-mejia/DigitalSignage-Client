import { createSlice } from "@reduxjs/toolkit";
import { getAirportFrom } from "./thunks";

const airportFromSlice = createSlice({
    name: 'airportfrom',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        airportfrom: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAirportFrom.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAirportFrom.fulfilled, (state, action) => {
            state.loading = false;
            state.airportfrom = action.payload;
        })
        .addCase(getAirportFrom.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default airportFromSlice;