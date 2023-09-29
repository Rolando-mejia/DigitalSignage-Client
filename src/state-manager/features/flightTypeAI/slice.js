import { createSlice } from "@reduxjs/toolkit";
import { getFlightType } from "./thunks";

const flightTypeSlice = createSlice({
    name: 'flighttype',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        flighttype: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getFlightType.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getFlightType.fulfilled, (state, action) => {
            state.loading = false;
            state.flighttype = action.payload;
        })
        .addCase(getFlightType.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default flightTypeSlice;