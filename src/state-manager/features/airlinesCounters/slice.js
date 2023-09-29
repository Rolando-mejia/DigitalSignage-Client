import { createSlice } from "@reduxjs/toolkit";
import { getAirlinesCounters } from "./thunks";

const airlineCountersSlice = createSlice({
    name: 'airline',
    initialState: {
        loading: false,
        error: undefined,
        success: false,
        airline: []
    },
    reducers: {},
    extraReducers: (builder) => {
        
        builder.addCase(getAirlinesCounters.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        })
        .addCase(getAirlinesCounters.fulfilled, (state, action) => {
            state.loading = false;
            state.airline = action.payload;
        })
        .addCase(getAirlinesCounters.rejected, (state, action) => {
            state.loading = false;
            state.error= String(action.payload)
        })
        
    }
});

export default airlineCountersSlice;